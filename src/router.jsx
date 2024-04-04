import { createBrowserRouter } from "react-router-dom";
import Login from './features/identity/components/Login/Login';
import IdentityLayout from "./layout/IdentityLayout";
import Register, { registerAction } from "./features/identity/components/Register/Register";

const router = createBrowserRouter([
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
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