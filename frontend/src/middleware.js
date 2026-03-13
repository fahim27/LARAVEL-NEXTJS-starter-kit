import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth_token");
  console.log("this is token", token);
  return NextResponse.next();
}

// only run on these paths
export const config = {
  matcher: ["/posts"],
};
