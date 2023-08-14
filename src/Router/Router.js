import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from '../pages/About'
import Contact from '../pages/Contact'
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import CompanyDetails from "../pages/CompanyDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/jobdetails/:id',
                // loader: ({ params }) => {
                //     return fetch(`https://localhost:5000/jobdetails/${params.id}`)
                // },
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
            },
            {
                path: '/companydetails/:id',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/company/details/${params.id}`)
                // },
                element: <CompanyDetails /> 
            }
        ]
    }
])