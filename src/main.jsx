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
    path: "cason-coding-portfolio/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
          {
            path: "/cason-coding-portfolio/about-me",
            element: <AboutMe/>
          },
          {
            path: "/cason-coding-portfolio/resume",
            element: <Resume/>
          },
          {
            path: "/cason-coding-portfolio/projects",
            element: <Projects/>,
            children: [
              {
                path: "/cason-coding-portfolio/projects/acm-osp-2023",
                element: <ACMOSP2023 />
              },
              {
                path: "/cason-coding-portfolio/projects/reddit-clone",
                element: <RedditClone/>
              },
              {
                path: "/cason-coding-portfolio/projects/safetravels",
                element: <SafeTravels />
              },
              {
                path: "/cason-coding-portfolio/projects/relational-algebra",
                element: <RelationalAlgebra/>
              },
              {
                path: "/cason-coding-portfolio/projects/portfolio",
                element: <Portfolio/>
              },
              {
                path: "/cason-coding-portfolio/projects/workout",
                element: <WorkoutTracker/>
              }
            ]
          },
          {
            path: "/cason-coding-portfolio/blog",
            element: <Blog />
          },
          {
            path: "/cason-coding-portfolio/links",
            element: <Links/>
          }
        
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} basename='/cason-coding-portfolio'/>
  </React.StrictMode>
);