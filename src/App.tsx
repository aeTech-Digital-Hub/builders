

import About from "./components/pages/About";
import Landing from "./components/pages/landingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Landing/>
    },

    {
      path : '/about',
      element: <About/>
    },



  ]);

  return  <RouterProvider router={router}/>
}

