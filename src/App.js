import "./App.css";
import LoginScreen from "./Components/login";
import BicycleList from "./Components/bicycleList";
import BookingScreen from "./Components/bookingScreen";
import Navigation from "./Components/Navigation";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


function App() {
  const userList = [
    {
      Email: "hachemelyes.sellami@medtech.tn",
      password: "testtest123",
      type: "admin",
    },
    {
      Email: "skanderadam.afi@medtech.tn",
      password: "testtest1234",
      type: "user",
    },
  ];

  const bicycleList = [
    { id: "001", available: "true", location: "" },
    { id: "002", available: "true", location: "" },
    { id: "003", available: "false", location: "" },
    { id: "004", available: "false", location: "" },
  ];

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginScreen/>,
    },
    {
      path: "/bicycles",
      element:  <BookingScreen />,
    },
  ]);
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
