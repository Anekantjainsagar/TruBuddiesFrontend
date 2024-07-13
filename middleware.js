// middleware.js

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function will run on every request
export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Check if the path includes 'admin'
  if (pathname.includes("/admin")) {
    const adminToken = searchParams.get("admin_token");

    // If the admin token is not present, block access
    if (!adminToken) {
      // Redirect to a 403 Forbidden page or return a response indicating forbidden access
      return new NextResponse("Access forbidden", { status: 403 });
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify which paths should use this middleware
export const config = {
  matcher: "/admin/:path*",
};
