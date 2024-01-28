import React, { useEffect } from "react";
import "./Mybooking.css";
import { useDispatch } from "react-redux";
import { getAllBookings, updateBookings } from "../../../redux/actions/BookingActions.js";
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import NavBar from "../../../components/NavBar/NavBar.js";
import Footer from "../../../components/Footer/Footer.js";

import { useState } from "react";
const Mybooking = () => {
  const [booking,setBooking]=useState([])
  const [bookingId,setbookingId]=useState('')
  const [slotId,setSlotId]=useState('')
  const [timeId,setTimeId]=useState('')
  const [inputs, setInputs] = useState({
    timeId: timeId,
    slotId: slotId
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllBookings((res) => {   
        console.log(res.data.data[0])
          setBooking(res.data.data[0])
          setbookingId(res.data.data[0].booking_data.id)

          setSlotId(res.data.data[0].booking_data.slotId)
          setTimeId(res.data.data[0].booking_data.timeId)
         console.log(res.data.data[0])
         setInputs({
          ...inputs,
          timeId: res.data.data[0].booking_data.timeId,
          slotId: res.data.data[0].booking_data.slotId
        })


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
    console.log(inputs);
    dispatch(updateBookings(bookingId,inputs, (res) => {
      console.log(res.status)
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

// const saveBtn =(event)=>{

//   event.preventDefault();
//   console.log(inputs)
//   dispatch(updateBookings(3,inputs, (res) => {
// alert(res)
//     if (res.status == 200) {
//       toast.success("Booking Updated Successfully ", {
//         autoClose: 1000
//       });



//     } else {
//       console.log(res)
//       toast.error("Booking Didn't edited", {
        
//         autoClose: 1000
//       });
//     }
//   }))
// }



  return (
    <>
    <div className="body">
      <NavBar></NavBar>
      
      <div className="form1">
      {/* {booking &&
                  booking.map((data, index) => ( 
                    setName=data.user_data?.first_name,
                    setCarNo=data.reserver_data?.carNo
                  ))} */}
                    

     

    
      </div>

      <div className="form">

        <Form onSubmit={handleSubmit}>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select The Slot</Form.Label>
            <Form.Select aria-label="Default select example" Name={"slotId"} value={inputs.slotId} onChange={handleInputChange}>
              <option>Select The Time Slot</option>
              <option value="1">Slot-1</option>
              <option value="2">Slot-2</option>
              <option value="3">Slot-3</option>
              <option value="4">Slot-4</option>
              <option value="5">Slot-5</option>
              <option value="6">Slot-6</option>
              <option value="7">Slot-7</option>
              <option value="8">Slot-8</option>
              <option value="9">Slot-9</option>
              <option value="10">Slot-10</option>



            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select The Time Slot</Form.Label>
            <Form.Select aria-label="Default select example"  Name={"timeId"} value={inputs.timeId} onChange={handleInputChange}>
              <option>Select The Time Slot</option>
              <option value="1">12.00am - 2.00am</option>
              <option value="2">2.00am - 4.00am</option>
              <option value="3">4.00am - 6.00am</option>
              <option value="4">6.00 a.m - 8.00 a.m</option>
              <option value="5">8.00 a.m - 10.00 a.m</option>
              <option value="6">10.00 a.m - 12.00 p.m</option>
              <option value="7">12.00 p.m - 2.00 p.m</option>
              <option value="8">2.00 p.m - 4.00 p.m</option>
              <option value="9">4.00 p.m -6.00 p.m</option>
              <option value="10">6.00 p.m - 8.00 p.m</option>
              <option value="11">8.00 p.m - 10.00 p.m</option>
              <option value="12">10.00 p.m - 12.00 a.m</option>
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
