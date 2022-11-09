import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages//Home/Home";
import AddService from "../Pages/AddService/AddService";
import AllFood from "../Pages/AllFood/AllFood";
import BlogPage from "../Pages/BlogPage/BlogPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Signup from "../Pages/Signup/Signup";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/allfood",
        element: <AllFood />,
        loader: () => fetch("http://localhost:8000/allfood"),
      },
      {
        path: "/allfood/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`https://tasty-bite-server.vercel.app/allfood/${params.id}`),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereviews/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/myreviews/${params.id}`),
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <BlogPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
