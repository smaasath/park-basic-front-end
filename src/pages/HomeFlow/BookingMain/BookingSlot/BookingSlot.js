import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BookingSlot.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../../../components/NavBar/NavBar'
import Footer from '../../../../components/Footer/Footer'



export default function BookingSlot() {
  return (
    <div className='body'>
         <NavBar></NavBar>
        <div className='form_1'>
      <Form>
      <h6>Select The Time Slot</h6>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Container>
      <Row className='slot_row'>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">6.00 a.m - 8.00 a.m</Button> </Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">8.00 a.m -10.00 a.m</Button> </Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">10.00 a.m -12.00 p.m</Button> </Col>
      </Row>
      <Row className='slot_row'>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">12.00 p.m - 2.00 p.m</Button></Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">2.00 p.m - 4.00 p.m</Button>  </Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">4.00 p.m - 6.00 p.m</Button> </Col>
      </Row>
      <Row className='slot_row'>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">6.00 p.m - 8.00 p.m</Button> </Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">8.00p.m -10.00 p.m</Button>  </Col>
        <Col lg={4} md={3} xs={12} className='mt-2'><Button variant="light">10.00 p.m-12.00 a.m</Button>  </Col>
      </Row>

    </Container>
    </Form.Group>
    </Form>
    
        </div>
        <br/>
        <br/>
        <br/>
        <Footer></Footer>
    </div>
  )
}
