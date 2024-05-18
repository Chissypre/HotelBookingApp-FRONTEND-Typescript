export interface PublicRoute {
  landing: string;
  register:string;
  login:string;
}
export interface PrivateRoute {
  AddHotels:string;
  MyHotels:string;
}


export const publicRoutes: PublicRoute = {
  landing: '/',
  register:'/register',
  login:'/sign-In',
}
export const privateRoutes: PrivateRoute = {
  AddHotels:'/add-hotel',
  MyHotels:'/my-hotels',
 
}