import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponants from "./components/Headers";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <HeaderComponants />
            <Outlet />
            <Footer />
        </>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:
            [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }

            ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);