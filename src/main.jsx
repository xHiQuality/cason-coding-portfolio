import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
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
import TestProject from "./routes/projects/testProject";
import TestProject2 from "./routes/projects/testProject2";
import TestProject3 from "./routes/projects/testProject3";
import TestProject4 from "./routes/projects/testProject4";
import TestProject5 from "./routes/projects/testProject5";

const router = createBrowserRouter([
  {
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
                path: "/projects/test",
                element: <TestProject />
              },
              {
                path: "/projects/test2",
                element: <TestProject2/>
              },
              {
                path: "/projects/test3",
                element: <TestProject3 />
              },
              {
                path: "/projects/test4",
                element: <TestProject4/>
              },
              {
                path: "/projects/test5",
                element: <TestProject5/>
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