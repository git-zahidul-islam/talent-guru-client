import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import BidRequests from "../pages/bidRequests/BidRequests";
import MyBids from "../pages/myBids/MyBids";
import JobDetails from "../pages/jobDetails/JobDetails";
import UpdateJob from "../pages/updateJob/UpdateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            },
            {
                path: '/myPostedJobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/bidRequests',
                element: <BidRequests></BidRequests>
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/updateJob/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
        ]
    },
]);


export default router;
