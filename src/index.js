import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "redux"

/* Styles */
import "./styles/index.css";

/* Componente */
// Routes
import Routes from "./routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="Index px-28 pb-28 pt-10 w-screen h-screen bg-green-bg">
    <Routes></Routes>
  </div>
);
