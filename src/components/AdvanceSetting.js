import React from 'react'
import Header2Title from './Header2Title'

const AdvanceSetting = () => {
    return (
        <div className='setting py-5'>
            <div className='custom-container'>
                <Header2Title title="HTML to PDF Advanced Settings" />
                <p className='pt-3'>Our default options do a great job of converting your HTML or webpages to PDF. However, you can use the advanced settings to create your PDF exactly the way you want.</p>
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
    )
}

export default AdvanceSetting