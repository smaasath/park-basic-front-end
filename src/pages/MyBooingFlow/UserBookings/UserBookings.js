import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { getAllBookings } from '../../../redux/actions/BookingActions'
import { Slide } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const UserBookings = () => {

    const dispatch = useDispatch()
    const [bookingData, setBookingData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(
            getAllBookings(
                (res) => {
                    if(res?.status == 200){
                        setBookingData(res?.data?.data)
                    }
                    
                }
            )
        )
    }, [])

    const navtoMybooking = (id) => {
        navigate(`/Mybooking/${id}`)
    }


    return (
        <div className="body">
            <NavBar />

            <div className='d-flex flex-wrap gap-4 justify-content-between p-5'>
                {bookingData.length > 0 ? bookingData.map((item, index) => (
                    <div onClick={() => navtoMybooking(item?.booking_data?.id)} style={{ backgroundColor: "white", height: 220, width: "45%", borderRadius: 27 }}>
                        <div className='mt-4 ps-4 pe-4 d-flex justify-content-between'>
                            <div>Booking Id</div>
                            <div>B0{item?.booking_data?.id}</div> {/* Use 'item.id' instead of 'bookingData?.booking_data?.id' */}
                        </div>
                        <div className='mt-4 ps-4 pe-4 d-flex justify-content-between'>
                            <div>Slot Name</div>
                            <div>{item?.booking_slot_data?.slotName}</div>
                        </div>
                        <div className='mt-4 ps-4 pe-4 d-flex justify-content-between'>
                            <div>Date</div>
                            <div>{item?.booking_data?.Date}</div>
                        </div>
                        <div className='mb-4 mt-4 ps-4 pe-4 d-flex justify-content-between'>
                            <div>Time</div>
                            <div>{item?.booking_time_data?.bookingTime}</div>
                        </div>
                    </div>
                )) : null}

            </div>
        </div>
    )
}

export default UserBookings
