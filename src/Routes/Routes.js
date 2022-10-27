import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Check from "../Course/Check";
import Course from "../Course/Course";
import CourseCardDetails from "../Course/CourseCardDetails";
import FAQ from "../FAQ/FAQ";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import RightSideDetails from "../Page/RightSideNav/RightSideDetails";
import PrivateRoutes from "./PrivateRoutes";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/course/:id',
                element: <CourseCardDetails></CourseCardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/check',
                element: <PrivateRoutes><Check></Check></PrivateRoutes>
            },
            {
                path: '/catagory/:id',
                element: <RightSideDetails></RightSideDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <h1>Opps Nothing Found</h1>
    }
]);