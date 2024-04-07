import { createBrowserRouter } from "react-router-dom";
import Login,{ loginAction } from './features/identity/components/Login/Login';
import IdentityLayout from "./layout/IdentityLayout";
import Register, { registerAction } from "./features/identity/components/Register/Register";
import MainLayout from "./layout/MainLayout";
import Courses from './Pages/Courses'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[{
            element:<Courses/>,
            index: true
            // set default root
        }]
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
                errorElement:<Login/>
            },
            {
                path: 'register',
                element: <Register/>,
                action: registerAction,
                errorElement:<Register/>
            },
        ]
    }
])

export default router;