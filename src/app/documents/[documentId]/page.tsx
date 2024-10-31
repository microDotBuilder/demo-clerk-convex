"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";

export default function DocumentPage({
  params,
}: {
  params: {
    documentId: Id<"documents">;
  };
}) {
  console.log(params.documentId);
  const document = useQuery(api.documents.getSingleDocument, {
    documentId: params.documentId,
  });

  if (!document) return <div>Document not found</div>;
  return <div>document id is {document?.documentURL}</div>;
}
