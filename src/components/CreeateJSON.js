import React, { useState } from 'react';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import Header2Title from './Header2Title';

const CreeateJSON = ({ showLineNumbers, props }) => {
    const [language, changeLanguage] = useState("jsx");
    return (
        <div className='create-json py-5'>
            <div className='custom-container'>
                <section class="row py-11">
                    <div class="pb-4">
                        <div class="title font-bold mb-3"><Header2Title title={`JSON storage bins\nthat won't break your app`} /></div>
                        
                        <p className='mb-5'>Set up a lightweight JSON endpoint in seconds, <br />then add a <a href="#" className='font-bold underline hover:text-orange-500'>schema</a> to edit your data safely at any time</p>
                        <div className='bg-white rounded-md p-5 position-relative'>

                            <CodeBlock
                                text={`{
    "what": "a simple JSON data store",
    "why": [
        "quick setup",
        "easy editing",
        "schema validation"
        ]
            
}`}
                                showLineNumbers={showLineNumbers}
                                language={language}
                                theme={dracula}
                                wrapLines

                            />

                            <button className='w-content btn-json bg-btn-primary rounded text-white border-0 hover-shadow p-3'>Create JSON Bin</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CreeateJSON