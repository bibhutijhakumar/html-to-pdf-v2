import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Signup from './SignupModal';
import SignIn from './SignIn';

const Navbar = () => {
const [signIn, setSignIn] = useState(false);

    const handleSignInClose = () => {
        setSignIn(false);
    };

    const handleSignIn = () => {
        setSignIn(true);
    };
    // Signup

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        // <div className='navbar'>
        //     <a className='nav-logo'></a>
        //     <div className='nav-menu'></div>
        // </div>
        <nav class="navbar navbar-expand-lg bg-white px-5">
            <div className='d-flex gap-4 align-items-center'>
                <a class="navbar-brand mr-0 w-25" href="#">
                    <img className='w-50 h-50' src={'/images/logo-3.png'} />
                </a>
                <div class="collapse navbar-collapse justify-content-between nav-clr" id="navbarNavDropdown">
                    <ul class="navbar-nav gap-4">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">HTML to PDF <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PDF to HTML</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PDF Converter</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Al Tools
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav gap-2">
                        <li class="nav-item">
                            {/* <a class="nav-link border-btn-primary txt-primary rounded px-3" href="#">Log in</a> */}
                            <Button className='nav-link bg-btn-primary text-white rounded px-3' variant="primary"  onClick={handleSignIn}>Signin</Button>
                            <SignIn show={signIn} handleClose={handleSignInClose} />
                        </li>
                        <li class="nav-item">

                            <Button className='nav-link bg-btn-primary text-white rounded px-3' variant="primary" onClick={handleShowModal}>Signup</Button>
                            <Signup show={showModal} handleClose={handleModalClose} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar