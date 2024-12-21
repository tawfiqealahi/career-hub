import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";
import Jobs from "./Components/Jobs/Jobs";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: ()=> fetch('/jobs.json') ,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader:()=> fetch('/jobs.json') ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
