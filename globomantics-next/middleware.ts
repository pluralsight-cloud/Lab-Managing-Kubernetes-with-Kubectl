import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * BROKEN BRANCH: log an error and return 500 for page traffic so the app is unusable
 * but the image still builds. stderr → `kubectl logs`.
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.error(
    `[BROKEN-BRANCH] Intentional failure for request: ${request.method} ${path}`
  );
  return new NextResponse(
    "BROKEN-BRANCH: This revision is intentionally broken. Roll back to main.\n",
    { status: 500, headers: { "content-type": "text/plain; charset=utf-8" } }
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$).*)",
  ],
};
