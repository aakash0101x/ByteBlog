import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login} from './components/index.js'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import ManageAccount from './pages/ManageAccount'
import UpdateName from './pages/UpdateName'
import UpdateEmail from './pages/UpdateEmail'
import UpdatePassword from './pages/UpdatePassword'
import Features from './pages/FooterPages/Features'
import Pricing from './pages/FooterPages/Pricing'
import ContactUs from './pages/FooterPages/ContactUs'
import TandC from './pages/FooterPages/TandC'
import License from './pages/FooterPages/License'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path: "/manage-account",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <ManageAccount />
                    </AuthLayout>
                )
            },
            {
                path: "/update-password",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <UpdatePassword />
                    </AuthLayout>
                )
            },
            {
                path: "/update-email",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <UpdateEmail />
                    </AuthLayout>
                )
            },
            {
                path: "/update-name",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <UpdateName />
                    </AuthLayout>
                )
            },
            {
                path:"/features",
                element:<Features/>
            },
            {
                path:"/pricing",
                element:<Pricing/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/t-and-c",
                element:<TandC/>
            },
            {
                path:"/license",
                element:<License/>
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)