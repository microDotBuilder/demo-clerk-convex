import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    tokenIdentifier: v.string(),
    storageId: v.id("_storage"),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),
  chats: defineTable({
    documentId: v.id("documents"), // creates the relationship between the document this chat belongs too..
    tokenIdentifier: v.string(),
    text: v.string(),
  }).index("by_tokenIdentifier_documentId", ["tokenIdentifier", "documentId"]),
});
