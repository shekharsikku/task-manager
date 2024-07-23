import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  apiRoutes: ["/api/tasks"],
  publicRoutes: ["/", "/incomplete", "/important", "/completed", "/api/tasks"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
