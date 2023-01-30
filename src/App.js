import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponants from "./components/Headers";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <>
            <HeaderComponants />
            <Body />
            <Footer />
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);