import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/src/core/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicPaths = ["/auth", "/api"];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  const supabaseResponse = await updateSession(request);

  const token = request.cookies.get("access_token")?.value;

  if (!token && !isPublicPath) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)",
  ],
};
