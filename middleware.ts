// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = false; // 실제 인증 여부에 맞게 수정 필요

  // 로그인하지 않은 경우
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // 인증된 경우 원래의 요청을 처리
  return NextResponse.next();
}

// middleware 적용 경로 설정
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/", // Required when i18n is enabled, otherwise middleware won't be executed on index route
    "/((?!api/|signin|google/|_next/|_static/|auth|_vercel|.well-known|fonts|icons|images/|[\\w-]+\\.\\w+).*)",
  ],
};
