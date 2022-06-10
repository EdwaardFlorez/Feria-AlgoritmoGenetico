import React from "react";

/* Component */
import ButtonMenu from "../atoms/buttons/ButtonMenu";

const MenuButtons = () => {
  return (
    <div className="Menu-Buttons flex flex-col justify-end items-end">
      <div className="py-2">
        <ButtonMenu value="Inicio"></ButtonMenu>
      </div>
      <div className="py-2">
        <ButtonMenu value="Grafico"></ButtonMenu>
      </div>
    </div>
  );
};

export default MenuButtons;
