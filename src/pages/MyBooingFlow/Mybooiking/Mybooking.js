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
  const [slotId,setSlotId]=useState('')
  const [timeId,setTimeId]=useState('')
  const [name,setName]=useState('')
  const [carNo,setCarNo]=useState('')
  const [inputs, setInputs] = useState({
    timeId: timeId,
    slotId: slotId
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllBookings(3,(res) => {
        
          setBooking(res.data.data)
          setName(res.data.data.user_data.first_name)
          setCarNo(res.data.data.reserver_data.carNo)
          setSlotId(res.data.data.booking_data.slotId)
          setTimeId(res.data.data.booking_data.timeId)
         console.log(res.data.data)
         setInputs({
          ...inputs,
          timeId: res.data.data.booking_data.timeId,
          slotId: res.data.data.booking_data.slotId
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
    dispatch(updateBookings(3,inputs, (res) => {

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
    <div className="body">
      <NavBar></NavBar>
      
      <div className="form1">
      {/* {booking &&
                  booking.map((data, index) => ( 
                    setName=data.user_data?.first_name,
                    setCarNo=data.reserver_data?.carNo
                  ))} */}
                    
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} />
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CarNo</Form.Label>
            <Form.Control type="text" placeholder="CarNo" value={carNo} />
          </Form.Group>
        </Form>
     

    
      </div>

      <div className="form">

        <Form onSubmit={handleSubmit}>

       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Time ID</Form.Label>
            <Form.Control type="text" placeholder="Time ID"  onChange={handleInputChange}
                Type={"text"}
                Name={"timeId"}
                light={true}
                value={inputs.timeId}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Slot ID</Form.Label>
            <Form.Control type="text" placeholder="Slot ID" onChange={handleInputChange}
                Type={"text"}
                Name={"slotId"}
                light={true}
                value={inputs.slotId}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select The Time Slot</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select The Time Slot</option>
              <option value="1">6.00 a.m - 8.00 a.m</option>
              <option value="2">8.00 a.m - 10.00 a.m</option>
              <option value="3">10.00 a.m - 12.00 p.m</option>
              <option value="4">12.00 p.m - 2.00 p.m</option>
              <option value="5">2.00 p.m - 4.00 p.m</option>
              <option value="6">4.00 p.m - 6.00 p.m</option>
              <option value="4">6.00 p.m - 8.00 p.m</option>
              <option value="5">8.00 p.m - 10.00 p.m</option>
              <option value="6">10.00 p.m - 12.00 a.m</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Save
          </Button>
        </Form>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mybooking;
