import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ErrorMessage from "../../pages/ErrorMessage/ErrorMessage";
import Registration from "../../pages/Registration/Registration";
import LogIn from "../../pages/LogIn/LogIn";
import ChefRecipe from "../../pages/ChefRecipe/ChefRecipe";
import Blogs from "../../pages/Blogs/Blogs";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://rich-chef-server-rahatul07.vercel.app/chefs"),
      },
      {
        path: "/chefRecipe/:id",
        element: (
          <PrivateRoute>
            <ChefRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rich-chef-server-rahatul07.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
