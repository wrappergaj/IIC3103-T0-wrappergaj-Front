import { createBrowserRouter,
    RouterProvider,
    redirect
} from "react-router-dom";

import AllPost from "./pages/AllPost/AllPost";
import CreatePostForm from "./pages/CreatePost/CreatePost";
import CreateUserForm from "./pages/CreateUser/CreateUser";
import OneUserPost from "./pages/OneUser/OneUser";
import Layout from "./pages/Layout";


function Router() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <AllPost />,
                },
                {
                    path: 'create-user',
                    element: <CreateUserForm />
                },
                {
                    path: 'create-post',
                    element: <CreatePostForm />
                },
                {
                    path: 'one-user/:userId',
                    element: <OneUserPost />
                }
            ]
        },
        {
            path: '*',
            loader: () => {
                return redirect('/')
            }
        }
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default Router;