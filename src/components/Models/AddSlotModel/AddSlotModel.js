import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CommonInputs from '../../common/CommonInputs/CommonInputs';
import CommonButton from '../../common/CommonButton/CommonButton';
import { useDispatch } from 'react-redux';
import { addSlot } from '../../../redux/actions/slotsActions';
import { InfinitySpin } from 'react-loader-spinner';






const AddSlotModel = (props) => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 2000);
  }, [error])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    if (!inputs || !inputs.slotName) {
      setError("Please enter the slot name")
      setLoading(false)
    } else {
      dispatch(addSlot(inputs, (res) => {
        setLoading(false)
        if (res.status == 200) {  
          toast.success("Slot Added Success fully ", {
            autoClose: 1000
          });


        } else {
          toast.error("Slot Didn't Added", {
            autoClose: 1000
          });
        }
      }))
    }
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Slots
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='pt-5 pb-5'>
            <div className='ps-2 pe-2'>
              <CommonInputs
                Label={"Slot Name"}
                PlaceHolder={"Enter the slot name"}
                onChange={handleChange}
                Type={"text"}
                Name={"slotName"}
                light={true}
                error={error}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>

          <Button className='bg-secondary' onClick={props.onHide}>Close</Button>
          <CommonButton
            onclick={handleSubmit}
            ButtonText={"Add Slot"}
            loading={loading}
          />

        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={8000} />
    </>
  )
}

export default AddSlotModel
