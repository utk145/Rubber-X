import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
// https://kinde.com/docs/developer-tools/nextjs-sdk/#protect-routes-with-kinde-auth-data
export async function middleware(request: NextRequest) {

    const { isAuthenticated } = getKindeServerSession();
    if (!await isAuthenticated()) {
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard', '/team/:path*'],
}