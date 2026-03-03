import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/src/core/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicPaths = ["/auth"];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  const supabaseResponse = await updateSession(request);

  if (!isPublicPath && !pathname.startsWith("/api")) {
    const { cookies } = request;
    const hasSession = cookies
      .getAll()
      .some((cookie) => cookie.name.startsWith("sb-") && cookie.name.includes("auth-token"));

    if (!hasSession) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (isPublicPath) {
    const { cookies } = request;
    const hasSession = cookies
      .getAll()
      .some((cookie) => cookie.name.startsWith("sb-") && cookie.name.includes("auth-token"));

    if (hasSession) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)",
  ],
};
