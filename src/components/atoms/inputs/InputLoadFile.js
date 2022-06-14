import React, { useState } from "react";

/* action */
import executionAction from "../../../redux/actions";

import { connect } from "react-redux";

/* Atoms-Component */
import InputParameters from "../inputs/InputParameters";
import ButtonSubmit from "../buttons/ButtonSubmit";

const InputLoadFile = ({ id, executionAction }) => {
  const [files, setFiles] = useState("");

  const handleChange = (event) => {
    //prevent page refresh
    event.preventDefault();
    var File = event.target.LoadFile.files[0];
    var nCiudades = event.target.Nciudades.value;
    var tanPoblacion = event.target.sizePoblacion.value;
    var proCruce = event.target.Pcruce.value;
    var proMutacion = event.target.Pmutacion.value;
    var nunMaxGen = event.target.maxGeneraciones.value;
    /* File to Json */
    const fileReader = new FileReader();
    fileReader.readAsText(File, "UTF-8");
    fileReader.onload = (e) => {
      var coordinates = e.target.result;
      var obj = JSON.parse(coordinates);
      const {X,Y} = obj;
      /* File Final */
      var objFinal = {
        "x" : [X],
        "y" : [Y],
        "nCiudades": nCiudades,
        "tanPoblacion": tanPoblacion,
        "proCruce": proCruce,
        "proMutacion": proMutacion,
        "nunMaxGen": nunMaxGen,
      }
      executionAction(objFinal);
      setFiles(coordinates);
    };
  };

  return (
    <React.Fragment>
      <form onSubmit={(e) => handleChange(e)}>
        <label className="" htmlFor={id}>
          <div className="bg-gray py-16 rounded-3xl"></div>
        </label>
        <input
          className="bg-gray h-px invisible"
          type="file"
          id={id}
          name={id}
          /* onChange={(e) => readFileOnUpload(e.target.files[0])} */
          /* onChange={(e) => console.log(e.target)} */
        ></input>
        {/*  */}
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
      </form>
    </React.Fragment>
  );
};

/* state is the store object? */
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { executionAction: executionAction })(
  InputLoadFile
);
