import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import './HomeMain.css'
import CommonButton from '../../../components/common/CommonButton/CommonButton'



function HomeMain() {
    return (
        <div className='container-fluid m-0 p-0 home-body'>
            <div>
                <NavBar />
            </div>

            <div className='d-flex justify-content-center align-items-center home-heading-container'>
                <div className='justify-content-center align-items-center'>
                    <div className='row home-heading justify-content-center align-items-center'>Hassle-free Parking</div>
                    <hr/>
                    <div className='row home-description justify-content-center align-items-center'>Discover and secure convenient car parking slots in our parking complex.</div>
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
    )
}

export default HomeMain
