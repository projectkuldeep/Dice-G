import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Gpage from "../components/Gpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root component
    children: [
      {
        index: true, // Default child route
        element: <Home />,
      },
      {
        path: "Gpage", // New route for About page
        element: <Gpage />,
      },
     
 
    ],
    

  },
]);

export default router;
