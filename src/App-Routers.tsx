import { createBrowserRouter } from "react-router-dom";
import {
  BookNow,
  ContactUs,
  Gallery,
  Home,
  Layout,
  Store,
} from "./project/Pages";

const AppRouters = () => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/gallery",
            element: <Gallery />,
          },
          {
            path: "/store",
            element: <Store />,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
          },
          {
            path: "/book-now",
            element: <BookNow />,
          },
        ],
      },
    ],
    // { basename: "/captura-website" },
  );
};

export default AppRouters;
