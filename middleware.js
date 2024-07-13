import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.includes("/admin")) {
    const adminToken = request.cookies.get("admin_token");
    if (!adminToken) {
      return new NextResponse("Access forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
