import Home from "../pages/home";
import Login from "../pages/login";
import Register from "@/pages/login/register";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path:'/login',
    element:<Login />,
  },
  {
    path:'/register',
    element:<Register />,
  }
  ]);
  
  export { routes };