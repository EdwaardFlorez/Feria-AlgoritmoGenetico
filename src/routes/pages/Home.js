import React from 'react';

/* Organisms-Component */
import UploadFile from '../../components/organisms/UploadFile';
import Parameters from '../../components/organisms/Parameters';

const Home = () => {
    return (
        <div className="Home flex flex-col">
            <UploadFile></UploadFile>
            <Parameters></Parameters>
        </div>
    );
}

export default Home;