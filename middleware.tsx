import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware executed");
  console.log(request.nextUrl.pathname);
  return NextResponse.redirect(
    new URL("/middlewareroute/middlewareredirected", request.url)
  );
}

export const config = {
  matcher: "/middlewareroute",
};
