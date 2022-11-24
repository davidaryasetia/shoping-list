import { createRouter } from "./context";
import superjson from "superjson";
import examples from "../../pages/api/examples";

export const appRouter = createRouter().transformer(superjson);

//   export type definition of api
export type AppRouter = typeof appRouter;
