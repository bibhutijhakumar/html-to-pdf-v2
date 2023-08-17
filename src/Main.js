import React, { useState } from 'react';
import './index.css'
import Navbar from './components/Navbar';
import ConvertHTML from './components/ConvertHTML';
import CreeateJSON from './components/CreeateJSON';
import ReadyToTry from './components/ReadyToTry';
import EasyToUse from './components/EasyToUse';
import AdvanceSetting from './components/AdvanceSetting';
const Main = () => {
    return (
        <>
            <header className="">
                <Navbar />
            </header>
            <div className="page-content">
                <ConvertHTML />
                <EasyToUse />
                <CreeateJSON />
                <AdvanceSetting />
                <ReadyToTry />
                    {/* <SignIn/> */}
                {/* <SignupModal/> */}
            </div>
            <footer className="py-3 text-center">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </footer>
        </>
    );
};
export default Main;
