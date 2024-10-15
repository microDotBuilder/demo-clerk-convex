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

export const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title is too short",
    })
    .max(100, {
      message: "Title is too long max 100 characters",
    }),
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));// Simulate API call
    await createDocument({ title: values.title });
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
        <SubmitButton
          isLoading={form.formState.isSubmitting}
          idleStateText="Upload"
          loadingStateText="Uploading..."
        />
      </form>
    </Form>
  );
}
