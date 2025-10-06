import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Logout berhasil",
  });

  // Clear the session cookie
  response.cookies.set("admin-session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0), // Set to past date to delete
    path: "/",
  });

  return response;
}
