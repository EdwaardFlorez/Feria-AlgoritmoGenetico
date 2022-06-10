import React from "react";

const ButtonMenu = ({ value }) => {
  return (
    <button
      type="button"
      className="text-xs sm:text-3xl text-purple hover:underline px-3 rounded-l-3xl bg-white pl-16 pr-8"
    >
      {value}
    </button>
  );
};

export default ButtonMenu;
