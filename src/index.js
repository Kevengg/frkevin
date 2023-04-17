import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./includes/footer.jsx";
import Header from "./includes/header.jsx";
import { BrowserRouter } from "react-router-dom";

// to do:

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <div className="senterWrap">
            <div className="senter"></div>
        </div>
        <div className="maxSideWrap">
            <div className="maxSide"></div>
            <div className="maxSide"></div>
        </div> */}
        <Header />
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Footer />
    </React.StrictMode>
);
