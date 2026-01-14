import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
const MainLayout = React.lazy(() => import("../shared/layouts/MainLayout"));
const DashBoard = React.lazy(() => import("../features/home/pages/DashBoard"));
const Subject = React.lazy(() => import("../features/subjects/pages/Subject"));
const Departments = React.lazy(() => import("../features/department/pages/Departments"));
const Faculty = React.lazy(() => import("../features/faculty/pages/Faculty"));
const Enrollments = React.lazy(() => import("../features/enrollments/pages/Enrollments"));
const Classes = React.lazy(() => import("../features/classes/pages/Classes"));
const SignIn = React.lazy(() => import("../features/auth/pages/SignIn"));
const SignUp = React.lazy(() => import("../features/auth/pages/SignUp"));



export const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
            <MainLayout />
            </Suspense>
        ),
        children: [
            { index: true, element: <DashBoard /> },
            { path: "/courses", element: <Subject /> },
            { path: "/departments", element: <Departments /> },
            { path: "/faculty", element: <Faculty /> },
            { path: "/enrollments", element: <Enrollments /> },
            { path: "/classes", element: <Classes /> },
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn />

    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: "*",
        element: <div>Page Not dound</div>
    }
])