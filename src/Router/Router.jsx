import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import DestinationDetails from "../components/DestinationDetails/DestinationDetails";
import Gallery from "../Pages/Gallery/Gallery";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import Authentication from "../Authentication/Authentication";
import PrivateRoute from "./PrivateRoute";
import MyList from "../Pages/MyList/MyList";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import TouristsDetails from "../components/TouristsDetails/TouristsDetails";
import Updated from "../Ui/Updated/Updated";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/allTourists'),
        

      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "destination-details/:id",
        element: (
          <PrivateRoute>
            <DestinationDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tourists-spot",
        element:<AllTouristsSpot />,
        loader:()=>fetch('http://localhost:5000/allTourists')
      },
      {
        path: "tourists-details/:id",
        element:<PrivateRoute>
          <TouristsDetails />
        </PrivateRoute>
      },
      {
        path: "update/:id",
        element:
          <Updated />
      },
    ],
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
]);

export default router;
