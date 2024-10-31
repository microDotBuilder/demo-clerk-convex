import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-form";
import React from "react";
import { Upload } from "lucide-react";

export function UploadDocumentModel() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant="destructive" className=" flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload any document below 25mb in size. and ask any questions to
            that docuemnt.
          </DialogDescription>
        </DialogHeader>
        <UploadDocumentForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
