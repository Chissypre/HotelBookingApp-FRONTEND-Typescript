export interface PublicRoute {
  landing: string;
  register:string;
  login:string;
}

export const publicRoutes: PublicRoute = {
  landing: '/',
  register:'/register',
  login:'/sign-In'
}