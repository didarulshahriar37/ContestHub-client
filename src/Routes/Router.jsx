import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Error from "../pages/Error/Error";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserManagement from "../pages/Dashboard/Users Management/UserManagement";
import AdminRoute from "./AdminRoute";
import ApproveCreators from "../pages/Dashboard/Approve Creators/ApproveCreators";
import ManageContests from "../pages/Dashboard/Manage Contests/ManageContests";
import HomePage from "../pages/Dashboard/Homepage/HomePage";
import CreatorRoute from "./CreatorRoute";
import AddContests from "../pages/Dashboard/Add Contests/AddContests";
import MyContests from "../pages/Dashboard/My Contests/MyContests";
import UserRoute from "./UserRoute";
import ParticipatedContests from "../pages/Dashboard/Participated Contests/ParticipatedContests";
import WinningContests from "../pages/Dashboard/Winning Contests/WinningContests";
import MyProfile from "../pages/Dashboard/My Profile/MyProfile";
import Loading from "../pages/shared/Loading";
import AllContests from "../pages/All Contests/AllContests";
import ContestDetails from "../pages/ContestDetails/ContestDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("https://contest-hub-server-green.vercel.app/popular-contests");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "all-contests",
        Component: AllContests,
        loader: async () => {
          const res = await fetch("https://contest-hub-server-green.vercel.app/all-contests");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "contest-details/:id",
        loader: async () => {
          const res = await fetch("https://contest-hub-server-green.vercel.app/all-contests");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        path: "/dashboard",
        Component: HomePage
      },
      {
        path: 'manage-users',
        element: <AdminRoute><UserManagement></UserManagement></AdminRoute>
      },
      {
        path: 'approve-creators',
        element: <AdminRoute><ApproveCreators></ApproveCreators></AdminRoute>
      },
      {
        path: 'manage-contests',
        element: <AdminRoute><ManageContests></ManageContests></AdminRoute>,
        loader: async () => {
          const res = await fetch("https://contest-hub-server-green.vercel.app/manage-contests");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'add-contest',
        element: <CreatorRoute><AddContests></AddContests></CreatorRoute>
      },
      {
        path: 'my-contests',
        element: <CreatorRoute><MyContests></MyContests></CreatorRoute>
      },
      {
        path: 'participated-contests',
        element: <UserRoute><ParticipatedContests></ParticipatedContests></UserRoute>
      },
      {
        path: 'winning-contests',
        element: <UserRoute><WinningContests></WinningContests></UserRoute>
      },
      {
        path: 'my-profile',
        element: <UserRoute><MyProfile></MyProfile></UserRoute>
      }
    ]
  },
  {
    path: "/*",
    Component: Error
  }
]);