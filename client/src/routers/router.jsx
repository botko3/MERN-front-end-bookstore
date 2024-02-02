import * as React from "react";
import Home from '../home/Home'
import Shop from '../shop/Shop'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Blog  from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from '../dashboard/UploadBook'
import ManageBooks from '../dashboard/ManageBooks'
import EditBooks from '../dashboard/EditBooks'
import Signup from "../components/Signup";
import Login from '../components/Login';
import Logout from '../components/Logout'
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/shop',
          element:<Shop/>
        },
        {
          path :"/about",
          element:<About/>
        },
        {
          path:"blog",
          element:<Blog/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=> fetch(`http://localhost:5002/book/${params.id}`)
        }

      ]
    },
    {
      path:'/admin/dashboard',
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>

        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`http://localhost:5002/book/${params.id}`)
        },
      ]
    },
    {
      path:"/sign-up",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/logout",
      element:<Logout/>
    }
  ]);


export default router;