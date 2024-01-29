import React, { useEffect } from "react";
import "./Mybooking.css";
import { useDispatch } from "react-redux";
import { getAllBookings, getBookingById, updateBookings } from "../../../redux/actions/BookingActions.js";
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import NavBar from "../../../components/NavBar/NavBar.js";
import Footer from "../../../components/Footer/Footer.js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBookingTime } from "../../../redux/actions/BookingTimeActions.js";
import { getAllSlots } from "../../../redux/actions/slotsActions.js";







const Mybooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([])
  const [bookingId, setbookingId] = useState('')
  const [slots, setslots] = useState([])
  const [time, setTime] = useState([])
  const [slotId, setSlotId] = useState('')
  const [timeId, setTimeId] = useState('')
  const [inputs, setInputs] = useState({
    timeId: booking?.booking_time_data?.id,
    slotId: booking?.booking_slot_data?.id
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getBookingById(id, (res) => {
        if (res?.status == 200) {
          setBooking(res.data.data)
        }
      })
    );


  }, []);


  useEffect(() => {
    dispatch(
      getAllBookingTime((res) => {
        if (res?.status == 200) {
          setTime(res.data.time_data)
        }
      })
    );


  }, []);

  useEffect(() => {
    dispatch(
      getAllSlots((res) => {
        if (res?.status == 200) {
          setslots(res.data.data)
        }
      })
    );


  }, []);


  function handleInputChange(event) {
    const { name, value } = event.target;

    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(id);
    dispatch(updateBookings(id, inputs, 
      (res) => {
      console.log(res)
      if (res.status == 200) {
        toast.success("Booking Updated Successfully ", {
          autoClose: 1000
        });

      } else {
        console.log(res)
        toast.error("Booking Didn't edited", {

          autoClose: 1000
        });
      }
    }))
  }



  return (
    <>
      <div className="body">
        <NavBar></NavBar>

        <div className="form">

          <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Select The Slot</Form.Label>
              <Form.Select aria-label="Default select example" Name={"slotId"} value={inputs.slotId} onChange={handleInputChange}>
                <option>Select The Time Slot</option>
                {
                  slots?.length > 0 ? slots?.map((item) => (
                    <option value={item.id}>{item.slotName}</option>
                  ))
                    : null
                }



              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Select The Time Slot</Form.Label>
              <Form.Select aria-label="Default select example" Name={"timeId"} value={inputs.timeId} onChange={handleInputChange}>
                <option>Select The Time Slot</option>
                {
                  time?.length > 0 ? time?.map((item) => (
                    <option value={item.id}>{item.bookingTime}</option>
                  ))
                    : null
                }


              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Save
            </Button>
          </Form>

        </div>
        <Footer></Footer>
      </div>
      <ToastContainer autoClose={8000} />
    </>
  );
};

export default Mybooking;
