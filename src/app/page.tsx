"use client";

import { DocumentCard } from "@/components/ui/document-card";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import { UploadDocumentModel } from "@/components/ui/upload-document-model";

export default function Home() {
  const documents = useQuery(api.documents.getDocument);

  return (
    <div className="p-24">
      <div className="flex items-center p-8 justify-between ">
        <h1 className="text-4xl font-bold ">My Documents</h1>

        {/*  */}

        <UploadDocumentModel />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {documents?.map((doc) => {
          return <DocumentCard key={doc._id} document={doc} />;
        })}
      </div>
    </div>
  );
}
