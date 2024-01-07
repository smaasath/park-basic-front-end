import React, { useEffect, useState } from 'react'
import './CommonSignComponent.css'
import parkLogo from '../../../assests/pictures/park-basic-logo.png'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function CommonSignComponent({ children, SignIn }) {

    const navigate = useNavigate();

    return (
        <>
            <div className='row common-sign-body justify-content-center align-items-center pt-5 pb-5' style={{height:SignIn ? "100vh" : null}}>

                <div className='container-fluid m-0 p-0 row justify-content-center align-items-center'>
                    <div className='common-signIn-container ps-3 pe-3 p-3'>
                        <div className='text-center common-signIn-heading h1'>{!SignIn ? "S I G N   U P" : "S I G N  I N"}</div>
                        <hr className='text-white mt-4' />
                        <div className='row'>
                            <div className='col-md-5 row justify-content-center align-items-center mt-4'>
                                <img src={parkLogo} style={{ width: "30%" }} />
                            </div>
                            <div className='col-md-7 mt-4'>
                                <div className='row justify-content-center align-items-center common-signIn-form-container'>
                                    {children}
                                </div>

                                <div className='text-center mt-5'>
                                    <h6 className='text-white'>
                                    {SignIn ? "Didn’t have an account ?" : "Alraedy have an account ?"}{' '}
                                        <span onClick={() => navigate(!SignIn ? "/signin" : "/signup")} className='common-sign-up-text'>{!SignIn ? "Sign In" : "Sign Up"}</span> here
                                    </h6>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={8000} />


        </>
    )
}

export default CommonSignComponent
