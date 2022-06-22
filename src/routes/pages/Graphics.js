import React from "react";

import { connect } from "react-redux";

const Graphics = ({ genetic }) => {
  /* const listGraphics = genetic.map((urlImage) => (
    <div>
      <img src={urlImage} />
    </div>
  )); */

  const helperFuntion = () => {
    if (genetic?.Isla2) {
      return (
        <div className="rounded-3xl p-5 bg-gray h-full scroll-smooth">
          <div className="flex flex-col justify-center content-center rounded-3xl scroll-smooth">
            <img src={require(genetic.Isla1.ruta)} />
            <p>Isla 1</p>
            <p>Longitud camino:</p>
            {/* <p>Inicial: {genetic.Isla1.inicial}</p>
            <p>Final: {genetic.Isla1.final}</p> */}
          </div>
          <div className="flex flex-col justify-center content-center rounded-3xl scroll-smooth">
            <img src={require(genetic.Isla1.ruta)} />
            <p>Isla 2</p>
            <p>Longitud camino:</p>
            {/* <p>Inicial: {genetic.Isla2.inicial}</p>
            <p>Final: {genetic.Isla2.final}</p> */}
          </div>
          <div className="flex flex-col justify-center content-center rounded-3xl">
            <img src={require(genetic.Isla1.ruta)} />
            <p>Isla 3</p>
            <p>Longitud camino:</p>
            {/* <p>Inicial: {genetic.Isla3.inicial}</p>
            <p>Final: {genetic.Isla3.final}</p> */}
          </div>
          <div className="flex flex-col justify-center content-center rounded-3xl">
            <img src={require(genetic.Isla1.ruta)} />
            <p>Isla 4</p>
            <p>Longitud camino:</p>
            {/* <p>Inicial: {genetic.Isla4.inicial}</p>
            <p>Final: {genetic.Isla4.final}</p> */}
          </div>
        </div>
      );
    } else if (genetic?.Isla1) {
      return (
        <div className="rounded-3xl p-5 bg-gray h-full">
          <div className="flex flex-col justify-center content-center rounded-3xl">
            <img src={require("../../static/ImagenPrueba.jpeg")} />
            <p>Isla 1</p>
            <p>Longitud camino:</p>
            {/* <p>Inicial: {genetic.Isla1.inicial}</p>
            <p>Final: {genetic.Isla1.final}</p> */}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <div className="Graphics flex flex-col justify-center content-center h-full scroll-smooth">
        <p className="text-purple text-4xl">Graficás</p>
        {helperFuntion()}
      </div>
    </React.Fragment>
  );
};

/* state is the store object? */
const mapStateToProps = (state) => {
  return {
    genetic: state.genetic,
  };
};

export default connect(mapStateToProps)(Graphics);
