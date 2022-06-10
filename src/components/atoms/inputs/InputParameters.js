import React from "react";

const InputParameters = ({ value, id }) => {
  return (
    <React.Fragment>
      <label className="text-purple text-2xl" htmlFor={id}>
        {value}
      </label>
      <input className="bg-gray rounded-3xl ml-4 py-1" type="text" id={id} name={id} />
    </React.Fragment>
  );
};

export default InputParameters;
