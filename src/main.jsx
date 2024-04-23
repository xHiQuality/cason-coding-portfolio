import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./css/index.css";
import Root from './routes/root';
import ErrorPage from "./error-page";
import AboutMe from "./routes/aboutme";
import Resume from "./routes/resume";
import Projects from "./routes/projects";
import Links from "./routes/links";
import Blog from "./routes/blog";
import ACMOSP2023 from "./routes/projects/acmOSP2023";
import RedditClone from "./routes/projects/redditClone";
import SafeTravels from "./routes/projects/safetravels";
import RelationalAlgebra from "./routes/projects/relationalAlgebra";
import Portfolio from "./routes/projects/portfolio";
import WorkoutTracker from "./routes/projects/workoutTracker";

const router = createBrowserRouter([
  {
    basename: "/cason-coding-portfolio/",
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
          {
            path: "/about-me",
            element: <AboutMe/>
          },
          {
            path: "/resume",
            element: <Resume/>
          },
          {
            path: "/projects",
            element: <Projects/>,
            children: [
              {
                path: "/projects/acm-osp-2023",
                element: <ACMOSP2023 />
              },
              {
                path: "/projects/reddit-clone",
                element: <RedditClone/>
              },
              {
                path: "/projects/safetravels",
                element: <SafeTravels />
              },
              {
                path: "/projects/relational-algebra",
                element: <RelationalAlgebra/>
              },
              {
                path: "/projects/portfolio",
                element: <Portfolio/>
              },
              {
                path: "/projects/workout",
                element: <WorkoutTracker/>
              }
            ]
          },
          {
            path: "/blog",
            element: <Blog />
          },
          {
            path: "/links",
            element: <Links/>
          }
        
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);