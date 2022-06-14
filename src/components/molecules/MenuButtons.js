import React from "react";

// Link. react-route-dom
import { Link } from "react-router-dom";

/* Component */
import ButtonMenu from "../atoms/buttons/ButtonMenu";

const MenuButtons = () => {
  return (
    <div className="Menu-Buttons flex flex-col justify-end items-end">
      <div className="py-2">
        <Link to="/">
          <ButtonMenu value="Inicio"></ButtonMenu>
        </Link>
      </div>
      <div className="py-2">
        <Link to="/graphics">
          <ButtonMenu value="Grafico"></ButtonMenu>
        </Link>
      </div>
    </div>
  );
};

export default MenuButtons;
