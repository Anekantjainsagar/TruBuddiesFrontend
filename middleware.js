import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  let userAuth = ["/chats", "/user"];
  let trubuddyAuth = ["/trubuddy/:path*"];

  // console.log("first");
  // console.log(request);
  if (request.cookies.get("token")?.value == undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.cookies.get("trubuddy_token")?.value == undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/chats", "/user/:path*", "/trubuddy/:path*"],
};
