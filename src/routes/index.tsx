import Home from "../pages/home";
import Login from "../pages/login";
import Register from "@/pages/login/register";
import Creator from "@/pages/creator";
import { createBrowserRouter } from "react-router";
import Content from "@/pages/content";
import Profile from "@/pages/profile"
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
  },
  {
    path:'/content',
    element:<Content />,
  },
  {
    path:'/profile',
    element:<Profile />
  },
  ]);
  
  export { routes };