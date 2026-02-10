import { createBrowserRouter } from "react-router-dom";
import { BookNow, ContactUs, Gallery, Home, Layout } from "./project/Pages";

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
            path: "/book-now",
            element: <BookNow />,
          },
          {
            path: "/gallery",
            element: <Gallery />,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
          },
        ],
      },
    ],
    // { basename: "/captura-website" },
  );
};

export default AppRouters;
