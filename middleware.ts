import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  apiRoutes: [],
  publicRoutes: ["/api/tasks"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
