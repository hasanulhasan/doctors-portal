import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Contexts/PrivateRoute/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/Allusers/AllUsers";
import ManageDoctor from "../Pages/DashBoard/ManageDoctor/ManageDoctor";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
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
        element: <MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/adddoctor',
        element: <AddDoctor></AddDoctor>
      },
      {
        path: '/dashboard/managedoctors',
        element: <ManageDoctor></ManageDoctor>
      }
    ]
  }
])

export default router;