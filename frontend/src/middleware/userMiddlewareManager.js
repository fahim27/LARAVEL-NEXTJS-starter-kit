import { NextResponse } from "next/server";

export function userMiddleware(request) {
  const token = request.cookies.get("auth_token");
  const { pathname } = request.nextUrl;

  // allow login & register without token
  if (
    pathname.startsWith("/user/login") ||
    pathname.startsWith("/user/register")
  ) {
    if (token) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // protect other user routes
  if (!token) {
    if (
      pathname.startsWith("/user/forget-password") ||
      pathname.startsWith("/user/verify-otp") ||
      pathname.startsWith("/user/reset-password")
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  return NextResponse.next();
}
