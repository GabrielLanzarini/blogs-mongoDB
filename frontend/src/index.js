import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import "animate.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./screens/Login"
import Home from "./screens/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
