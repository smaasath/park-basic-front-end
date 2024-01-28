import React, { useEffect, useState } from 'react'
import './BookingSlot.css'
import NavBar from '../../../../components/NavBar/NavBar'
import Footer from '../../../../components/Footer/Footer'
import CommonTimeSlots from '../../../../components/common/CommonTimeSlots/CommonTimeSlots';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getAllBookingTime } from '../../../../redux/actions/BookingTimeActions';
import CommonLoading from '../../../../components/common/CommonLoading/CommonLoading';
import { getBookingDataBySlots } from '../../../../redux/actions/slotsActions';
import { createBooking, setSelectedTime } from '../../../../redux/actions/BookingActions';
import CommonButton from '../../../../components/common/CommonButton/CommonButton';
import { toast, ToastContainer } from 'react-toastify';



export default function BookingSlot() {
  const { id } = useParams();
  const [TimeData, setTimeData] = useState([])
  const [BookingData, setBookingData] = useState([])
  const [loading, setLoading] = useState(false)
  const [buttonloading, setbuttonloading] = useState(false)
  const [booking, setbooking] = useState(0)
  const dispatch = useDispatch();
  const { selectedTime } = useSelector((state) => state.booking);
  const navigate = useNavigate();


  useEffect(() => {
    getAllBookingTimes()
    getAllBookingForSlot()
    dispatch(setSelectedTime(null))
  }, [booking])

  const getAllBookingForSlot = () => {
    setLoading(true)
    dispatch(
      getBookingDataBySlots(id,
        (res) => {
          if (res?.status == 200) {
            setBookingData(res.data.booking_data)
            setLoading(false)
          }

        }
      )
    )
  }

  const getAllBookingTimes = () => {
    setLoading(true)
    dispatch(
      getAllBookingTime(
        (res) => {
          if (res?.status == 200) {
            setTimeData(res.data.time_data)
            setLoading(false)
          }

        }
      )
    )
  }

  const CreateUserBooking = () => {
    setbuttonloading(true)
    dispatch(createBooking(
      {
        "timeId": selectedTime,
        "slotId": id
      },
      (res) => {
        console.log(res)
        if (res.status == 200) {
          toast.success("Booking Created SuccessFully ", {
            autoClose: 1000
          });
          setbooking(booking + 1)
          setbuttonloading(false)
        } else if (res.status == 401) {
          navigate('/signin')
        } else {
          toast.error("Booking Created failed", {
            autoClose: 1000
          });
          setbuttonloading(false)
        }
      }
    ))
  }

  return (
    <div className='body'>
      <NavBar></NavBar>

      <div className='p-5 d-flex flex-wrap justify-content-between gap-5'>
        {loading ? (
          <div className='row w-100 align-items-center justify-content-center'>
            <CommonLoading onlySpin={true} />
          </div>

        )
          : (
            <>
              {TimeData.length > 0 ? TimeData.map((item, index) => (
                <CommonTimeSlots select={item.id == selectedTime} key={index} item={item} disabled={BookingData?.find(booking => booking.timeId === item.id)} />
              )) : null}
            </>
          )}



      </div>
      <hr />
      <div className='row p-2 d-flex justify-content-end'>
        <div style={{ width: 250 }}>
          <CommonButton
            ButtonText={"Create Booking"}
            loading={buttonloading}
            onclick={() => CreateUserBooking()}

          />
        </div>

      </div>
      <ToastContainer autoClose={8000} />
      <Footer></Footer>
    </div>
  )
}
