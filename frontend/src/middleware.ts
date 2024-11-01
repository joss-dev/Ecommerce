import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value; 
  const url = request.nextUrl.clone();

  const isAuthenticated = !!token;
  console.log("valor del authenticated: ", isAuthenticated)
  console.log("valor del token: ", token)
  
  const unauthenticatedRoutes = ["/login", "/signup"];
  if (isAuthenticated && unauthenticatedRoutes.includes(url.pathname)) {
    url.pathname = "/"; 
    return NextResponse.redirect(url);
  }


  const protectedRoutes = ["/dashboard", "/profile"];
  if (!isAuthenticated && protectedRoutes.includes(url.pathname)) {
    url.pathname = "/login"; 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
