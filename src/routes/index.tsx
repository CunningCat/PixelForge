import Home from "../pages/home";
import Login from "../pages/login";
import Register from "@/pages/login/register";
import Creator from "@/pages/creator";
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
  },
  {
    path:'/creator',
    element:<Creator />,
  }
  ]);
  
  export { routes };