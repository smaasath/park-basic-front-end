import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CommonSlot() {
  return (
    <div>
    <Row>
        {/* Slots and slots_book can be change with the affect of database whether the slot is booked or not */}
        <Col className='slot'  xs={1}><img src = {slots} alt='slots icon' /></Col>
      </Row>
    </div>
  )
}
