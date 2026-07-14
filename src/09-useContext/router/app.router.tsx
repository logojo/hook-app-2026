import {
  createBrowserRouter,
  Navigate,
} from "react-router";

import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/auth/Login";
import { PrivateRoute, PublicRoute } from './PrivateRoute';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/profile",
    element: <PrivateRoute  element={ <Profile /> }/>,
  },
  {
    path: "/login",
    element: <PublicRoute  element={  <Login /> }/>,
  },
  {
    path:'*',
    element: <Navigate to='/' />
  }
  
]);