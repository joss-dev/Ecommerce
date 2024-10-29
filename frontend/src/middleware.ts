import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // Lee el token desde las cookies
  const url = request.nextUrl.clone();

  const isAuthenticated = !!token;

  // Rutas accesibles solo sin autenticación (login, register)
  const unauthenticatedRoutes = ["/login", "/signup"];
  if (isAuthenticated && unauthenticatedRoutes.includes(url.pathname)) {
    url.pathname = "/"; // Redirige al dashboard si el usuario ya está autenticado
    return NextResponse.redirect(url);
  }

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = ["/dashboard", "/profile"];
  if (!isAuthenticated && protectedRoutes.includes(url.pathname)) {
    url.pathname = "/login"; // Redirige al login si el usuario no está autenticado
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
