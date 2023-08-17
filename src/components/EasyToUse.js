import React from 'react'
import Header2Title from './Header2Title'

const EasyToUse = () => {
    return (
        <div className='easy-use py-5'>
            <div className='custom-container'>
                <main className="d-flex flex-column gap-4">
                    <div className="border border-1 rounded p-4">

                        <Header2Title title="How to Convert HTML to PDF?" />
                        <ol className="card-text lh-lg mt-3">
                            <li>Click the "Choose Files" or "Enter Webpage" button and select your HTML files</li>
                            <li>Click on the "Convert to PDF" button to start the conversion</li>
                            <li>When the status change to “Done” click the "Download PDF" button</li>
                        </ol>
                    </div>
                    <div className="d-flex gap-4">
                        <div className="border border-1 rounded p-4">
                            <Header2Title title="Easy to Use" />
                            <p className="card-text mt-3">
                                Simply upload your HTML files or enter webpage URLs and then hit the “Convert” button to start converting to PDF format. No need to install any software.
                            </p>
                        </div>
                        <div className="border border-1 rounded p-4">
                            <Header2Title title="High Quality" />
                            <p className="card-text mt-3">
                                Output PDF files will look exactly like your input HTML or webpage! No more missing background images or CSS styles. Just a perfect PDF conversion.
                            </p>
                        </div>
                        <div className="border border-1 rounded p-4">
                            <Header2Title title="Best Options" />
                            <p className="card-text mt-3">
                                Fine-tune your HTML to PDF conversion by using our “Advanced Options”. You can choose the page size, margins, orientation, and much more. See below.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default EasyToUse