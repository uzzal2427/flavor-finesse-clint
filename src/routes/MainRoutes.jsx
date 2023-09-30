import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../compo/Home/Home";
import ChefDetails from "../compo/ChefDetails/ChefDetails";
import Login from "../compo/Login/Login";
import Register from "../compo/Login/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:'/chefDetails/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/chef/${params.id}`)

    },
    {
      path: '/login',
      element:<Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

  export default router; 