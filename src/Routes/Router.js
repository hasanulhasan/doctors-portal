import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../Contexts/AdminRoute";
import PrivateRoute from "../Contexts/PrivateRoute/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/Allusers/AllUsers";
import ManageDoctor from "../Pages/DashBoard/ManageDoctor/ManageDoctor";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../UserInfo/Login/Login";
import SignUp from "../UserInfo/SignUp/SignUp";
import Error from "../Utilities/Error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
      },
      {
        path: '/dashboard/managedoctors',
        element: <ManageDoctor></ManageDoctor>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
      }
    ]
  }
])

export default router;