// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  // Cria um cliente Supabase que pode operar no middleware
  const supabase = createMiddlewareClient({ req, res });

  // Pega a sessão atual do usuário
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Se o usuário NÃO estiver logado E estiver tentando acessar uma rota protegida
  if (!session) {
    // Redireciona para a página de login
    return NextResponse.redirect(new URL('/sign-up', req.url));
  }
  
  // Se o usuário estiver logado, permite que a requisição continue
  return res;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/eventos/:path*',
  ],
};