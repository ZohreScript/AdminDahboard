import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from './features/identity/components/Login/Login';
import IdentityLayout from "./layout/IdentityLayout";
import Register, { registerAction } from "./features/identity/components/Register/Register";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses, { coursesLoader } from './Pages/Courses'
import CourseCategories, { categoriesLoader } from "./Pages/CourseeCategoris";
import CourseDetails, { courseDetailsLoader } from "./features/Courses/Components/CourseDetails";
import { CategoryProvider } from "./features/Categories/Components/Category-context";
import NotFound from "./Pages/not-found";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                element: <Courses />,
                index: true,
                // set default root
                loader: coursesLoader
            },
            {
                path: "course-categories",
                element: (
                    <CategoryProvider>
                        <CourseCategories />
                    </CategoryProvider>
                ),
                loader: categoriesLoader,
            },
            {
                path: "courses/:id",
                element: <CourseDetails />,
                loader: courseDetailsLoader,
            }

        ]
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
                errorElement: <Login />
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
                errorElement: <Register />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
export async function postLoader() {
    const response = await fetch("posts url");
    if (!response.ok) {
        throw new Error("Could not fetch posts");
    }
    return response;
}