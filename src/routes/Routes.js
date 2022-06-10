import React from "react";
import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";

// Link. react-route-dom
// import { Link } from "react-router-dom";

// Home // Header
import Menu from "./menu/Menu";

// Components Pages

// pages
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";

// molecules
import Header from "../components/molecules/Header";

const Routes = () => {
  return (
    <div className="Routes rounded-3xl p-10 h-full bg-white">
      <BrowserRouter>
        <Header></Header>
        <div className="flex flex-row items-center pt-4 h-full">
          <div className="grow  h-full relative">
            <Menu className="order-2 sm:order-first grow"></Menu>
          </div>
          {/* In react-router-dom v6, "Switch" is replaced by routes "Routes" */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="grow">
            <RoutesDom className="order-1 sm:order-2">
              <Route path="/" element={<Home />} />
              <Route path="/graphics" element={<Graphics />} />
            </RoutesDom>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
