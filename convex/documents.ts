import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createDocument = mutation({
  args: {
    title: v.string(),
  },
  returns: v.string(),
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("documents", { title: args.title });
    return id;
  },
});

export const getDocument = query({
  async handler(ctx) {
    return await ctx.db.query("documents").collect();
  },
});
