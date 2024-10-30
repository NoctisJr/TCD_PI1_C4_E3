import Home from "../views/Home/Home";
import NotFound from "../views/NotFount/NotFount";

const configRouter = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  { 
    path: "*",
    element: <NotFound />
  },
];

export default configRouter;
