

import About from "./components/pages/About";
import HousePlane from "./components/pages/HousePlane";
import Landing from "./components/pages/landingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trust from "./components/pages/Trust";
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


    {
      path : '/trust-Us',
      element: <Trust/>
    },

    {
      path : '/plan',
      element: <HousePlane/>
    },



  ]);

  return  <RouterProvider router={router}/>
}

