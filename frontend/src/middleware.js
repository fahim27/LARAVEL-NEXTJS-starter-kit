import { NextResponse } from "next/server";
import { userMiddleware } from "./middleware/userMiddlewareManager";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/user")) {
    return userMiddleware(request);
  }

  return NextResponse.next();
}

// only run on these paths
export const config = {
  matcher: ["/user/:path*"],
};
