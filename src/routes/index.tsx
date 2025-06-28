import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("@/pages/login/register"));
const Creator = lazy(() => import("@/pages/creator"));
const Profile = lazy(() => import("@/pages/profile"));
const Post = lazy(() => import("@/pages/post"));
const PostDetail = lazy(() => import("@/pages/postdetail"));
const Page_Community = lazy(() => import("@/pages/post/Page_Community"));
const AllPost = lazy(() => import("@/pages/post/AllPost"));
const Loading = lazy(() => import("@/pages/Page_Loading"));
const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/creator",
    element: <Creator />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/post",
    element: <Post />,
    children: [
      { index: true, element: <AllPost /> },
      { path: "community/:community", element: <Page_Community /> },
    ],
  },
  {
    path: "/post/:post_id",
    element: <PostDetail />,
  },
  {
    path: "/Loading",
    element: <Loading />,
  },
]);

export { routes };
