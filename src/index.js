import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

/* Styles */
import "./styles/index.css";

/* Componente */
// Routes
import Routes from "./routes/Routes";
// reducers
import Reducers from "./redux/reducers/";

const store = createStore(Reducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="Index px-28 pb-28 pt-10 w-screen h-screen bg-green-bg">
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  </div>
);
