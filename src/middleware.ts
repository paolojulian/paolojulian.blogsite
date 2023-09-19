import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = ['https://app.contentful.com', 'https://paolojulian.dev/']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware')
  if (process.env.NODE_ENV === 'production') {
    const origin = request.headers.get('origin');
    console.log('origin', origin)
    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(`Bad origin ${origin}`, {
        status: 400,
        statusText: 'CORS',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
  const response = NextResponse.next()
  response.headers.append('Access-Control-Allow-Credentials', "true")
  response.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  response.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  console.log('Added CORS headers')

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/revalidate',
}