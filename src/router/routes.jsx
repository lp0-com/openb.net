import { Navigate, createBrowserRouter } from "react-router-dom";
import { TopScroll } from "../components/util/TopScroll";
import App from "../App";
import Template from "../pages/Template";
import Home from "../pages/Home";
import Stagger from "../pages/Stagger";
import Basic from "../pages/Basic";
import Scroll from "../pages/scroll/Scroll";
import PageScroll from "../pages/scroll/PageScroll";
import HorizontalScroll from "../pages/scroll/HorizontalScroll";
import EnlargeScroll from "../pages/scroll/EnlargeScroll";
import Hamburger from "../pages/Hamburger";
import Buttons from "../pages/Buttons";
import Text from "../pages/text/Text";
import Gradients from "../pages/Gradients";
import GridHover from "../pages/GridHover";
import InViewScroll from "../pages/scroll/InViewScroll";
import Marquee from "../pages/scroll/Marquee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopScroll />
        <App />
      </>
    ),
  },
  {
    path: "/template",
    element: (
      <>
        <TopScroll />
        <Template />
      </>
    ),
    children: [
      {
        path: "/template",
        element: <Home />,
      },
      {
        path: "/template/stagger",
        element: <Stagger />,
      },
      {
        path: "/template/basic",
        element: <Basic />,
      },
      {
        path: "/template/text",
        element: <Text />,
      },
      {
        path: "/template/hamburger",
        element: <Hamburger />,
      },
      {
        path: "/template/buttons",
        element: <Buttons />,
      },
      {
        path: "/template/gradient",
        element: <Gradients />,
      },
      {
        path: "/template/gridhover",
        element: <GridHover />,
      },
      {
        path: "/template/scroll",
        element: <Scroll />,
        children: [
          {
            path: "/template/scroll",
            element: (
              <p className="font-thin">Click on any of the Tabs above</p>
            ),
          },
          {
            path: "/template/scroll/horizontal",
            element: <HorizontalScroll />,
          },
          {
            path: "/template/scroll/page",
            element: <PageScroll />,
          },
          {
            path: "/template/scroll/enlarge",
            element: <EnlargeScroll />,
          },
          {
            path: "/template/scroll/inview",
            element: <InViewScroll />,
          },
          {
            path: "/template/scroll/marquee",
            element: <Marquee />,
          },
        ],
      },
      {
        path: "/template/*",
        element: <Navigate to={`/template`} />,
      },
    ],
  },
]);
