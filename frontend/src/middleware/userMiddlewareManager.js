import { NextResponse } from "next/server";

export function userMiddleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token")?.value;

  const publicRoutes = ["/user/login", "/user/register"];

  const passwordRoutes = [
    "/user/forget-password",
    "/user/verify-otp",
    "/user/reset-password",
  ];

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const isPasswordRoute = passwordRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // If logged in user tries to access login/register
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
  }

  // Allow public routes
  if (isPublicRoute || isPasswordRoute) {
    return NextResponse.next();
  }

  // Protect all other routes
  if (!token) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  return NextResponse.next();
}
