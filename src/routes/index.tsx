import Home from "../pages/home";
import Login from "../pages/login";
import Register from "@/pages/login/register";
import Creator from "@/pages/creator";
import { createBrowserRouter } from "react-router";
import Profile from "@/pages/profile"
import Post from "@/pages/post"
import PostDetail from "@/pages/postdetail";
import Page_Community from "@/pages/post/Page_Community";
import AllPost from "@/pages/post/AllPost";
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
    element:<Profile />,
    
  },
  {
    path:'/post',
    element:<Post />,
    children:[
      {index:true,element:<AllPost />},
      {path:'community/:community',element:<Page_Community />}
    ]
  },
  {
    path: '/post/:post_id',
    element: <PostDetail />
  },
  
  ]);
  
  export { routes };