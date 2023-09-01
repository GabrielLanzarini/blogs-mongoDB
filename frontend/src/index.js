import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import "animate.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./screens/Login"
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Post from "./screens/Post"
import Blog from "./screens/Blog"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/home/profile/:id",
        element: <Profile />,
    },
    {
        path: "/home/post/:id",
        element: <Post />,
    },
    {
        path: "/home/blog/:id",
        element: <Blog />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
