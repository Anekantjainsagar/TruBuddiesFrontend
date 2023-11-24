import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  let userAuth = ["/chats", "/user"];
  let trubuddyAuth = ["/trubuddy/:path*"];

  if (
    request.cookies.get("token")?.value == undefined &&
    !request.url.includes("/trubuddy")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    request.cookies.get("trubuddy_token")?.value == undefined &&
    !request.url.includes("/trubuddy/login") &&
    request.url.includes("/trubuddy")
  ) {
    return NextResponse.redirect(new URL("/trubuddy/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/chats", "/user/:path*", "/trubuddy/:path*"],
};
