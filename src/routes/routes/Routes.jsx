import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import SingleCard from "../../pages/SingleCard/SingleCard";
import ErrorMessage from "../../pages/ErrorMessage/ErrorMessage";
import Registration from "../../pages/Registration/Registration";

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
        path: "/singleCard/:id",
        element: <SingleCard />,
        loader: ({ params }) =>
          fetch(
            `https://rich-chef-server-rahatul07.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);
