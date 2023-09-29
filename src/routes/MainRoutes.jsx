import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../compo/Home/Home";
import ChefDetails from "../compo/ChefDetails/ChefDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:'/chefDetails/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/chef/${params.id}`)

    }
  ]);

  export default router; 