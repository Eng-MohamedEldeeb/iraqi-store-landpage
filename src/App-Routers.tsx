import { createBrowserRouter } from "react-router-dom";
import Layout from "./project/Layout/Layout";
import BookNow from "./project/pages/BookNow/BookNow";
import Home from "./project/pages/Home/Home";
import Gallery from "./project/pages/Gallery/Gallery";
import ContactUs from "./project/pages/ContactUs/ContactUs";

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
