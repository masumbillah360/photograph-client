import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages//Home/Home";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import MyServices from "../Pages/MyServices/MyServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import UpdateService from "../Pages/UpdateService/UpdateService";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/allservices",
        element: <AllServices />,
        loader: () => fetch("https://photograph-server.vercel.app/allservices"),
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://photograph-server.vercel.app/allservices/${params.id}`
          ),
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
          fetch(`https://photograph-server.vercel.app/myreviews/${params.id}`, {
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
          fetch(
            `https://photograph-server.vercel.app/myservices/${params.id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
      },
      { path: "/blog", element: <BlogPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
