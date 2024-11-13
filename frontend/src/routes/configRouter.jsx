import TourDetail from "../components/TourDetail/TourDetail";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFount/NotFount";
//import Register from "../views/Register/Register";
import Tours from "../views/Tours/Tours";

const configRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/tours/:id",
    element: <TourDetail />,
  },
  {
    path: "/misitio",
    element: <Home />,
  },
  { 
    path: "*",
    element: <NotFound />
  },
];

export default configRouter;
