import React, { useEffect, useState } from 'react'
import AddSlotModel from '../../Models/AddSlotModel/AddSlotModel';
import editIcon from "../../../assests/pictures/edit.png";
import deleteIcon from "../../../assests/pictures/delete.png";


const CommonSlotTableBody = ({ item, seteditModalShow}) => {
    const [editModalShow, seteditModalShows] = useState(false);
    const handleEditClick = () => {
        seteditModalShows(true);
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
                            <img src={deleteIcon} style={{ width: 20, height: 20 }} />
                        </div>
                    </div>
                </td>
            </tr>
            <AddSlotModel
                show={editModalShow}
                onHide={() => {
                    seteditModalShow(false)
                    seteditModalShows(false);
                }}
                item={item}
            />
        </>
    )
}

export default CommonSlotTableBody
