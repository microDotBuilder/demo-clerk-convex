"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { SubmitButton } from "./submit-button";

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB

export const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title is too short",
    })
    .max(100, {
      message: "Title is too long max 100 characters",
    }),
  file: z.instanceof(File).refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, "File size must be less than 3MB"),
});

export default function UploadDocumentForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const createDocument = useMutation(api.documents.createDocument);
  const uploadURL = useMutation(api.documents.generateUploadUrl);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));// Simulate API call
    if (values.file.size > MAX_UPLOAD_SIZE) {
      throw new Error("File Size is more then 3MB");
    }
    const uri = await uploadURL();
    console.log(uri);
    if (!values.file) return;
    const result = await fetch(uri, {
      method: "POST",
      headers: { "Content-Type": values.file.type },
      body: values.file,
    });
    const { storageId } = await result.json();

    await createDocument({
      title: values.title,
      storageId,
    });
    setOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title:</FormLabel>
              <FormControl>
                <Input placeholder="Title For Document.." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Title:</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  {...fieldProps}
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          isLoading={form.formState.isSubmitting}
          idleStateText="Upload"
          loadingStateText="Uploading..."
        />
      </form>
    </Form>
  );
}
