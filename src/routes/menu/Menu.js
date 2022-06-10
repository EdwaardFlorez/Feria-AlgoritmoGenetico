import React from "react";

/* Molecule-Component */
import MenuButtons from "../../components/molecules/MenuButtons";

/* Atom-Icon-Component */
import UnipamplonaIcon from "../../components/atoms/icons/UnipamplonaIcon";

const Menu = () => {
  return (
    <div className="Menu  rounded-3xl h-full w-5/6 bg-purple absolute -left-20 -bottom-5">
      {/* La idea es aqui ahora poner otro div con position absolute */}
      <div className="flex flex-col items-center p-8">
        <UnipamplonaIcon></UnipamplonaIcon>
        <p className="text-center text-4xl text-white">Unipamplona</p>
      </div>
      <MenuButtons></MenuButtons>
    </div>
  );
};

export default Menu;
