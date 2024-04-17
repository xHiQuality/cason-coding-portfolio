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

const router = createBrowserRouter([
  {
    path: "/",
    redirect: '/about-me',
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
            element: <Projects/>
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