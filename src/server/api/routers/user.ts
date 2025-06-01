import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    const user = ctx.user;

    if (!user?.id) {
      return {
        greeting: "Hello! You are not signed in.",
      };
    }

    return {
      greeting: `Hello ${user.fullName}!`,
    };
  }),
});
