import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import Footer from '../../../components/Footer/Footer'
import './BookingMain.css'
import CommonParkingSlot from '../../../components/common/CommonParkingSlot/CommonParkingSlot';
import { useDispatch } from 'react-redux';
import { getAllSlots } from '../../../redux/actions/slotsActions';
import CommonLoading from '../../../components/common/CommonLoading/CommonLoading';




export default function BookingMain() {
  const dispatch = useDispatch();
  const [slotData, setSlotData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getSlotData()
  }, [])

  const getSlotData = () => {
    setLoading(true)
    dispatch(
      getAllSlots(
        (res) => {
          if (res.status == 200) {
            setSlotData(res.data.data)
            setLoading(false)
          }

        }
      )
    )

  }
  return (
    <div className='body'>
      <NavBar></NavBar>
      <div>

        <div className='head'>
          <h4>FIND A PARKING SPACE</h4>
        </div>
        {loading ? (
          <CommonLoading onlySpin={true} />
        )
          : (
            <div className='m-5 d-flex flex-wrap justify-content-between gap-5'>
              {slotData.length > 0 ? slotData.map((item, index) => (
                <CommonParkingSlot key={index} item={item} />
              )) : null}

            </div>
          )
        }

      </div>
      <Footer />
    </div>
  )
}
