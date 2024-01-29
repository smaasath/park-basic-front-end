import React from 'react'
import slots_book from '../../../assests/pictures/slots.png'
import slots from '../../../assests/pictures/slots-black.png'
import './CommonParkingSlot.css'
import { useNavigate } from 'react-router-dom'



function CommonParkingSlot({ item }) {

    const navigate = useNavigate();

    const navigateToSlot = () => {
        navigate(`/slot/${item.id}`)
    }

    return (

        <div className=''>
            <button onClick={() => navigateToSlot()} className='border-0 rounded-4' style={{ flexDirection: "column" }}>
                <div style={{ width: 150, flex: 3, alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                    <img
                        src={slots_book}
                    />
                </div>
                <hr />
                <div style={{ width: 150, flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <h6>{item.slotName}</h6>
                </div>
            </button>
        </div>

    )
}

export default CommonParkingSlot
