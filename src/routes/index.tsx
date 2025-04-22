import Home from "../pages/home";
import Login from "../pages/login";
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
  }
  ]);
  
  export { routes };