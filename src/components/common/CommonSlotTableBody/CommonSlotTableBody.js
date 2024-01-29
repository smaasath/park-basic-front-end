import React, { useEffect, useState } from 'react'
import AddSlotModel from '../../Models/AddSlotModel/AddSlotModel';
import editIcon from "../../../assests/pictures/edit.png";
import deleteIcon from "../../../assests/pictures/delete.png";
import DeleteModel from '../../Models/DeleteModel/DeleteModel';

const CommonSlotTableBody = ({ item, editModalShows, deleteModalShows, seteditModalShow, setdeleteModalShows }) => {
    const [editModalShow, seteditModalShows] = useState(false);
    const [deleteModalShow, setdeleteModalShow] = useState(false);
    const handleEditClick = () => {
        seteditModalShows(true);
    };

    const handleDeleteClick = () => {
        setdeleteModalShow(true);
    };

    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.slotName}</td>
                <td>
                    <div className="d-flex gap-3">
                        <div>
                            <img onClick={handleEditClick} src={editIcon} style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                            <img onClick={handleDeleteClick} src={deleteIcon} style={{ width: 20, height: 20 }} />
                        </div>
                    </div>
                </td>
            </tr>
            <AddSlotModel
                show={editModalShow}
                onHide={() => {
                    seteditModalShow(editModalShows + 1)
                    seteditModalShows(false);
                }}
                item={item}
            />

            <DeleteModel
                show={deleteModalShow}
                onHide={() => {
                    setdeleteModalShows(deleteModalShows + 1)
                    setdeleteModalShow(false);
                }}
                item={item.id}
            />
        </>
    )
}

export default CommonSlotTableBody
