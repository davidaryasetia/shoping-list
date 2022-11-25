import { createRouter } from "./context";
import { z } from "zod";

export const itemRouter = createRouter().mutation("addItem", {
  input: z.object({
    name: z.string(),
  }),
  resolve: async ({ input, ctx }) => {
    const { name } = input;

    const item = await ctx.prisma.shoppingItem.create({
      data: {
        name,
      },
    });

    return item;
  },
});
