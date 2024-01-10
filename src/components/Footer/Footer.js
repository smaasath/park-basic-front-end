import React from 'react'
import './Footer.css'
import parkLogo from '../../assests/pictures/park-basic-logo.png'
import CommonSocialMedia from '../common/CommonSocialMedia/CommonSocialMedia.js'




const Footer = () => {
    return (
        <div className='footer-container container-fluid m-0 ps-4 pe-4 row'>
            <div className='d-flex justify-content-between pt-4 pb-4'>
                <div className='row'>
                    <div className='col text-white'>AboutUs</div>
                    <div className='col text-white'>FAQ</div>
                </div>

                <CommonSocialMedia />

                <div>
                    <img className='d-none d-sm-block' src={parkLogo} style={{ width: "60%" }} />
                </div>
            </div>
            <hr className='text-white' />
            <div className='text-center text-white w-100 pb-3'>ParKiT - All Rights Reserved 2023</div>

        </div>
    )
}

export default Footer
