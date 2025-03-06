// import {clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//     publicRoutes:[
//         '/',
//         '/events/:id',
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing',
//     ],
//     ignoredRoutes:[
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing'
//     ]
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  return;
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // Ignore Next.js internal assets
    "/api/:path*", // Apply to all API routes
  ],
  publicRoutes: [
    "/", // Public Home Page
    "/events/*", // Allow access to dynamic event pages
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
};
