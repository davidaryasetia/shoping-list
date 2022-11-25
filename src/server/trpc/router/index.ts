import superjson from "superjson";
import { createRouter } from "./context";
import { itemRouter } from "./itemRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("items", itemRouter);

// export type definition api
export type AppRouter = typeof appRouter;
