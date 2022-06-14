import React from "react";

/* Atoms-Componet */
/* El button submit junto con label e iput deben ir dentrop de formulario */
import ButtonSubmit from "../atoms/buttons/ButtonSubmit";
import InputLoadFile from "../atoms/inputs/InputLoadFile";

const UploadFile = () => {
  return (
    <div className="Upload-File flex flex-col">
      <p className="text-purple text-4xl pb-2">Subir Archivo</p>
      <div>
        <InputLoadFile id="LoadFile"></InputLoadFile>
      </div>
      {/* <div className="flex justify-end">
        <ButtonSubmit value="Eliminar"></ButtonSubmit>
      </div> */}
    </div>
  );
};

export default UploadFile;
