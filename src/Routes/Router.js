import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Contexts/PrivateRoute/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../UserInfo/Login/Login";
import SignUp from "../UserInfo/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  }
])

export default router;