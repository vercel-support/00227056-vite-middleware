// middleware.js
import { next } from '@vercel/edge';

export async function middleware(_request: Request) {
  return next({
    status: 302,
    headers: {
      location: 'https://vercel.com',
    },
  });
}
