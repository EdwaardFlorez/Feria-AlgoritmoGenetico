import React from 'react';

const ButtonSubmit = ({value}) =>{
    return <button type="button" className="ButtonSubmit text-xs sm:text-2xl text-black sm:text-white hover:underline px-3 sm:px-5 py-2 rounded-3xl bg-green">{value}</button>
}

export default ButtonSubmit;