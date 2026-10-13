import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const { id } = context.locals.starlightRoute;

  // Blog posts have their own dedicated pagination rendered by starlight-blog.
  // Clear Starlight documentation pagination on blog post pages to prevent duplicate prev/next buttons.
  if (id.startsWith("blog/") || id.includes("/blog/")) {
    context.locals.starlightRoute.pagination = {
      prev: undefined,
      next: undefined,
    };
  }
});
