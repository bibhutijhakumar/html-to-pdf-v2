import React from 'react'
import Header2Title from './Header2Title'

const ReadyToTry = () => {
    return (
        <div className='setting py-5'>
            <div className='custom-container'>
                <div class="d-flex flex-column justify-content-center gap-4 align-items-center">
                    {/* <h2 className='m-0'></h2> */}
                    <Header2Title title="Ready to try it out?" />
                    <button className='w-content bg-btn-primary rounded text-white border-0 hover-shadow p-3'>Create JSON Bin</button>
                </div>
            </div>
        </div>
    )
}
export default ReadyToTry