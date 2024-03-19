import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createNewFile = mutation({
    args: {
        fileName: v.string(),
        teamId: v.string(),
        createdBy: v.string(),
        archive: v.boolean(),
        document: v.string(),
        whiteboard: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert("files", args);
        return result;
    },
});


export const getTotalFilesCount = query({
    args: {
        teamId: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query("files").filter(q => q.eq(q.field('teamId'), args.teamId)).order("desc").collect();
        return result;
    },
})

export const updateDocumentInFile = mutation({
    args: {
        _id: v.id("files"),
        document: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args._id, { document: args.document });
        return result;
    },
});


export const getDocumentInfoById = query({
    args: {
        _id: v.id("files"),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.get(args._id);
        return result;
    },
});


export const updateWhiteboardInFile = mutation({
    args: {
        _id: v.id("files"),
        whiteboard: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args._id, { whiteboard: args.whiteboard });
        return result;
    },
});


export const deleteFile = mutation({
    args: {
      _id: v.id("files"), // Specify the ID type for the file
    },
    handler: async (ctx, args) => {
      try {
        // Delete the file from the "files" collection
        await ctx.db.delete(args._id);
        return true; // Indicate successful deletion
      } catch (error) {
        console.error("Error deleting file:", error);
        throw error; // Re-throw the error for handling in the calling code
      }
    },
  });