import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("yes", "received");

  const { token } = await req.json();

  console.log(token,"received");

  const response = NextResponse.json({ success: true });

  response.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}

export async function GET(req) {
  const token = req.cookies.get("auth_token")?.value;
  return NextResponse.json({ token });
}
