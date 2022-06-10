import React from "react";

/* Atoms-Component */
import InputParameters from "../atoms/inputs/InputParameters";
import ButtonSubmit from "../atoms/buttons/ButtonSubmit";

const Parameters = () => {
  return (
    <div className="Parameters flex flex-col">
      <p className="text-purple text-4xl pb-5 pt-14">Ajustar Parametros</p>
      <div className="py-2">
        <InputParameters
          value="Numero de ciudades:"
          id="Nciudades"
        ></InputParameters>
      </div>
      <div className="py-2">
        <InputParameters
          value="Tamaño de la población:"
          id="sizePoblacion"
        ></InputParameters>
      </div>
      <div className="py-2">
        <InputParameters
          value="Numero maximo de generaciones:"
          id="maxGeneraciones"
        ></InputParameters>
      </div>
      <div className="py-2">
        <InputParameters
          value="Probabilidad de cruce:"
          id="Pcruce"
        ></InputParameters>
      </div>
      <div className="py-2">
        <InputParameters
          value="Probabilidad de mutacion:"
          id="Pmutacion"
        ></InputParameters>
      </div>
      <div className="flex justify-end">
        <ButtonSubmit value="Aceptar"></ButtonSubmit>
      </div>
    </div>
  );
};

export default Parameters;
