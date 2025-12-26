import { updateSession } from "@/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/auth", "/api/auth"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  const accessToken = request.cookies.get("access_token")?.value;

  if (!accessToken && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard/employees", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
