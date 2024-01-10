import React, { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import './HomeMain.css'
import CommonButton from '../../../components/common/CommonButton/CommonButton.js'
import ToyCar from '../../../assests/pictures/homeToyCar.png'
import Security from '../../../assests/pictures/Security Shield.png'
import Payment from '../../../assests/pictures/Card Payment.png'
import Phone from '../../../assests/pictures/Android Phone.png'
import Footer from '../../../components/Footer/Footer.js'
import { InfinitySpin } from 'react-loader-spinner';
import parklogo from '../../../assests/pictures/park-basic-logo.png'







function HomeMain() {

    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)

        setTimeout(() => {
            setloading(false);
        }, 1500);

    }, []);

    return (
        <>
            {loading ?
                (
                    <div className='d-flex text-center justify-content-center align-items-center loader-spinner'>
                        <div className='row  justify-content-center align-items-center'>
                            <img src={parklogo} style={{width:"45%"}} />

                            <InfinitySpin
                                visible={true}
                                width="200"
                                color="#FB8800"

                            />
                        </div>



                    </div>
                )
                :
                (

                    <>

                        <NavBar />

                        <section>
                            <div className='container-fluid m-0 p-0 home-body'>
                                <div className='d-flex justify-content-center align-items-center home-heading-container'>
                                    <div className='justify-content-center align-items-center'>
                                        <div className='text-center row h1 justify-content-center align-items-center'>Hassle-free Parking</div>
                                        <hr />
                                        <div className='text-center row h5 home-description justify-content-center align-items-center p-4'>Discover and secure convenient car parking slots in our parking complex.</div>
                                        <div className='mt-4 row justify-content-center align-items-center'>
                                            <div className='w-75 d-flex justify-content-center align-items-center'>
                                                <CommonButton
                                                    ButtonText={"FIND A PARKING SPACE"}
                                                    ParkingSpaceButton={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='home-section-goal'>

                            <div className='container-fluid m-0 ps-5 pe-5 row'>
                                <hr className='text-white mt-5' />
                                <div className='col-5 row justify-content-center align-items-center'>
                                    <div><img className='d-none d-md-block' src={ToyCar} style={{ width: "70%" }} /></div>
                                </div>

                                <div className='col-md-7 mt-2 justify-content-start align-items-start'>
                                    <div className='text-center h1 text-white'>Our Goals</div>
                                    <div className='text-center mt-5 h4 text-white'>
                                        Optimize parking operations via tech-driven solutions for efficient space utilization, real-time availability updates, and improved user experience. Enhance security, reduce congestion, and offer convenient payment options for a seamless and sustainable parking experience.
                                    </div>
                                    <div className='mt-5 d-flex justify-content-between'>
                                        <img className='' src={Security} style={{ width: "13%" }} />
                                        <img className='' src={Payment} style={{ width: "13%" }} />
                                        <img className='' src={Phone} style={{ width: "13%" }} />
                                    </div>
                                </div>

                                <hr className='text-white mb-5 mt-5' />

                            </div>

                        </section>

                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default HomeMain
