import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages//Home/Home";
import AddService from "../Pages/AddService/AddService";
import AllFood from "../Pages/AllFood/AllFood";
import BlogPage from "../Pages/BlogPage/BlogPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import MyServices from "../Pages/MyServices/MyServices";
import Signup from "../Pages/Signup/Signup";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import UpdateService from "../Pages/UpdateService/UpdateService";
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
          fetch(`http://localhost:8000/allfood/${params.id}`),
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
          fetch(`http://localhost:8000/myreviews/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myservices",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: <UpdateService />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/myservices/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      { path: "/blog", element: <BlogPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
