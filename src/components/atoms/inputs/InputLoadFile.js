import React from 'react';

const InputLoadFile = (id) => {
    return (
        <React.Fragment>
            <label className="" htmlFor={id}>
                <div className="bg-gray py-16 rounded-3xl"></div>
            </label>
            <input className="bg-gray h-px invisible" type="file" id={id} name={id}></input>
        </React.Fragment>
    );
}

export default InputLoadFile;