import React from 'react'
import { setSelectedTime } from '../../../redux/actions/BookingActions'
import { useDispatch } from 'react-redux'


export default function CommonTimeSlots({ item, disabled, select }) {
    const dispatch = useDispatch();


    return (
        <div>
            <button
                onClick={() => dispatch(setSelectedTime(item.id))}
                disabled={disabled}
                className='d-flex justify-content-center align-items-center border-0 ps-3 pe-3'
                style={{
                    backgroundColor: select ? "#F9E79F" : "#D5DBDB",
                    height: 40,
                    borderRadius: 5,
                    fontSize: 15,
                    fontWeight: 500,
                    minWidth: 200
                }}>
                {item?.bookingTime}
            </button>
        </div>
    )
}
