import React, { useState } from 'react';

import './index.css'
import Navbar from './components/Navbar';
import ConvertHTML from './components/ConvertHTML';
import CreeateJSON from './components/CreeateJSON';
import ReadyToTry from './components/ReadyToTry';
const Main = () => {
   
    return (
        <>
            <header className="">
                <Navbar />
            </header>
            <div className="page-content">
                <div className='htm-to-pdf py-5'>
                    <div className='container'>
                        <div className='custom-container'>
                            <ConvertHTML />
                        </div>
                    </div>
                </div>

                <div className='convert-doc py-5'>
                    <div className='custom-container'>
                        <main className="d-flex flex-column gap-4">
                            <div className="border border-1 rounded p-4">
                                <h2 className="card-title pb-3">How to Convert HTML to PDF?</h2>
                                <ol className="card-text lh-lg">
                                    <li>Click the "Choose Files" or "Enter Webpage" button and select your HTML files</li>
                                    <li>Click on the "Convert to PDF" button to start the conversion</li>
                                    <li>When the status change to “Done” click the "Download PDF" button</li>
                                </ol>
                            </div>
                            <div className="d-flex gap-4">
                                <div className="border border-1 rounded p-4">
                                    <h2 className="card-title pb-3">Easy to Use</h2>
                                    <p className="card-text">
                                        Simply upload your HTML files or enter webpage URLs and then hit the “Convert” button to start converting to PDF format. No need to install any software.
                                    </p>
                                </div>
                                <div className="border border-1 rounded p-4">
                                    <h2 className="card-title pb-3">High Quality</h2>
                                    <p className="card-text">
                                        Output PDF files will look exactly like your input HTML or webpage! No more missing background images or CSS styles. Just a perfect PDF conversion.
                                    </p>
                                </div>
                                <div className="border border-1 rounded p-4">
                                    <h2 className="card-title pb-3">Best Options</h2>
                                    <p className="card-text">
                                        Fine-tune your HTML to PDF conversion by using our “Advanced Options”. You can choose the page size, margins, orientation, and much more. See below.
                                    </p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className='create-json py-5'>
                    <div className='custom-container'>
                        {/* <h2 className="card-title pb-3">JSON storage bins <br />that won't break your app</h2>
                        <p>Set up a lightweight JSON endpoint in seconds, <br />then add a <a href="#" className='font-bold underline hover:text-orange-500'>schema</a> to edit your data safely at any time</p> */}
                        <CreeateJSON />

                    </div>
                </div>
                <div className='setting py-5'>
                    <div className='custom-container'>
                        <h2 className="card-title pb-3">HTML to PDF Advanced Settings</h2>
                        <p>Our default options do a great job of converting your HTML or webpages to PDF. However, you can use the advanced settings to create your PDF exactly the way you want.</p>
                        <ol className="card-text lh-lg">
                            <li><strong>Page Size:</strong> You can select a page size such as A4 or choose “Auto” to print your HTML to one long PDF</li>
                            <li><strong>Page Orientation:</strong> Use this option to create a Landscape or Portrait PDF
                                Margin: Add a margin (in pixels)
                            </li>
                            <li>
                                <strong>Viewport width (px):</strong> Use this option to specify a browser width when rendering your HTML or Webpage. For example, if you want to convert the mobile or tablet version of a webpage to PDF, enter the desired mobile device’s width here.
                            </li>
                            <li>
                                <strong>Initial delay:</strong> Sometimes you want to wait a couple of seconds for the page to fully load before capturing it to a PDF. We use a default value of 3 seconds.
                            </li>
                            <li><strong>Hide Cookies:</strong> Use AI to hide annoying cookie notices automatically!
                            </li>
                            <li><strong>Use Print Stylesheet:</strong> If enabled, we will use the print CSS defined in the page’s stylesheet. So that you can “print” HTML to PDF exactly the way it is supposed to.</li>
                        </ol>
                    </div>
                </div>
                <div className='setting py-5'>
                    <div className='custom-container'>
                        <ReadyToTry />
                    </div>
                </div>
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
