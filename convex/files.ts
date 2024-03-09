import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewFile = mutation({
    args: {
        fileName: v.string(),
        teamId: v.string(),
        createdBy: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert("files",args);
        return result;
    },
});