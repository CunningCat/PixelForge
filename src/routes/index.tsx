import Home from "../pages/home";
import Login from "../pages/login";
import Register from "@/pages/login/register";
import Creator from "@/pages/creator";
import { createBrowserRouter } from "react-router";
import Profile from "@/pages/profile"
import Post from "@/pages/post"
import PostDetail from "@/pages/postdetail";
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
    path:'/profile',
    element:<Profile />
  },
  {
    path:'/post',
    element:<Post />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />
  }
  ]);
  
  export { routes };