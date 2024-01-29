import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CommonInputs from '../../common/CommonInputs/CommonInputs';
import CommonButton from '../../common/CommonButton/CommonButton';
import { useDispatch } from 'react-redux';
import { addSlot, deleteSlots, editSlots } from '../../../redux/actions/slotsActions';
import { NavItem } from 'react-bootstrap';




const DeleteModel = (props) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);


    const deleteSlotsbyid = () => {

        dispatch(
            deleteSlots(props.item,
                (res) => {
                    if (res.status == 200) {
                        toast.success("slot deleted ", {
                            autoClose: 1000
                        });
                        props.onHide()
                    } else {
                        toast.error("slot not deleted ", {
                            autoClose: 1000
                        });
                        props.onHide()
                    }

                }

            )
        )

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
                        {"Are you Want to Delete the slots"} {props.item}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Footer>

                    <Button className='bg-secondary' onClick={props.onHide}>Close</Button>
                    <CommonButton
                        onclick={() => deleteSlotsbyid()}
                        ButtonText={"delete"}
                        loading={loading}
                    />

                </Modal.Footer>
            </Modal>
            <ToastContainer autoClose={8000} />
        </>
    )
}

export default DeleteModel
