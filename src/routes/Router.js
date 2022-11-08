import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages//Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/allfood",
        element: <AllFood />,
        loader: () => fetch("https://tasty-bite-server.vercel.app/allfood"),
      },
      {
        path: "/allfood/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`https://tasty-bite-server.vercel.app/allfood/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
