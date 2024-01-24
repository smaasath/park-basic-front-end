import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import Footer from '../../../components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slots_book from '../../../assests/pictures/slots.png'
import slots from '../../../assests/pictures/slots-black.png'
import './BookingMain.css'
// import slots from '../../../components/common/CommonSlot'


export default function BookingMain() {
  return (
    <div className='body'>
      <NavBar></NavBar>
        <div>
      <Container>
        <div className='head'>
        <h4>FIND A PARKING SPACE</h4>
        </div>    
      <Row className='row_item'>
         {/* Slots and slots_book can be change with the affect of database whether the slot is booked or not  */}
         <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots_book} alt='slots icon' id='S1' title='s1'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S2' title='s2'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S3' title='s3'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S4' title='s4'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S5' title='s5'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots_book} alt='slots icon' id='S6' title='s6'/> </a> </Col>
      </Row>
      <Row className='row_item'>
         {/* Slots and slots_book can be change with the affect of database whether the slot is booked or not  */}
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S7' title='s7'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S8' title='s8'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S9' title='s9'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots_book} alt='slots icon' id='S10' title='s10'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots} alt='slots icon' id='S11' title='s11'/> </a> </Col>
        <Col className='slot'  lg={1} md={3} xs={6}><a href='/slot'><img src = {slots_book} alt='slots icon' id='S12' title='s12'/> </a> </Col>
      </Row>
        </Container>
        <br/>
        </div>
      <Footer/>
    </div>
  )
}
