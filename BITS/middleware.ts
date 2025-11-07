import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect root path to intro page if intro hasn't been seen
  if (request.nextUrl.pathname === '/') {
    const introSeen = request.cookies.get('introSeen')
    
    // Only redirect to intro if user hasn't completed intro yet
    if (!introSeen || introSeen.value !== 'true') {
      return NextResponse.redirect(new URL('/intro', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
