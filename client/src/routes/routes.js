// Example setup with createBrowserRouter (React Router 6.4+)
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from '../auth/register/Register';
import Login from '../auth/login/Login';
import Dashboard from '../admin/Dashboard/Dashboard';
import CreateTask from '../admin/Task/CreateTask';
import EditTask from '../admin/Task/EditTask';
import Task from '../admin/Task/Task';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/task",
        element: <Task />,
    },
    {
        path: "/create-task",
        element: <CreateTask />,
    },
    {
        path: "/edit-task/:id",
        element: <EditTask />,
    },
]);

function Root() {
    return <RouterProvider router={router} />;
}

export default Root;
