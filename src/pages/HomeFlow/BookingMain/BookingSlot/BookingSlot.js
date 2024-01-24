import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BookingSlot.css'
import NavBar from '../../../../components/NavBar/NavBar'
import Footer from '../../../../components/Footer/Footer'



export default function BookingSlot() {
  return (
    <div className='body'>
         <NavBar></NavBar>
        <div className='form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Slot ID</Form.Label>
        <Form.Control type="text" placeholder="Slot ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="User ID" />
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
      <Button variant="primary" type="submit">
        Book
      </Button>
    </Form>
        </div>
        <Footer></Footer>
    </div>
  )
}
