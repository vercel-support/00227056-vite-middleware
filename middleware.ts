// middleware.js
import { next } from '@vercel/edge';

export default async function middleware(request: Request) {
  console.log(request);
  
  // return Response.redirect('https://vercel.com', 302);
  
  return next({
    status: 302,
    headers: {
      location: 'https://vercel.com',
    },
  });
}
