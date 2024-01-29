import React, { useEffect, useState } from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminParkingSlots.css";
import slotimage from "../../../assests/pictures/slotimage.png";
import CommonButton from "../../../components/common/CommonButton/CommonButton";
import AddSlotModel from "../../../components/Models/AddSlotModel/AddSlotModel";
import { getAllSlots } from "../../../redux/actions/slotsActions";
import { useDispatch } from "react-redux";
import CommonLoading from "../../../components/common/CommonLoading/CommonLoading";
import CommonSlotTableBody from "../../../components/common/CommonSlotTableBody/CommonSlotTableBody";


const AdminParkingSlots = () => {

  const [addModalShow, setaddModalShow] = useState(false);
  const [slotData, setSlotData] = useState([])
  const [loading, setLoading] = useState(false)
  const [editModalShow, seteditModalShow] = useState(0);
  const [deleteModalShow, setdeleteModalShows] = useState(0);
  const dispatch = useDispatch()


  useEffect(() => {
    setLoading(true)
    dispatch(getAllSlots((res) => {
      if (res.status == 200) {
        setLoading(false)
        setSlotData(res.data.data)
      }
    }))
  }, [addModalShow, editModalShow, deleteModalShow])


  const addSlots = () => {
    setaddModalShow(true)
  }



  return (
    <>
      <div>
        <CommonAdminLayout>
          {loading ? (
            <div style={{ height: "100vh" }} className="p-3 d-flex align-items-center justify-content-center">
              <CommonLoading
                onlySpin={true}
              />
            </div>
          ) : (


            <div className="AdminParkingSlots-body p-3">
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <h3>Parking Slots</h3>
                </div>
                <div>
                  <CommonButton
                    ButtonText={"Add Slots"}
                    onclick={addSlots}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <div style={{ maxHeight: "475px", overflowY: "scroll" }}>
                    <table class="table table-striped">
                      <thead>
                        <tr className="sticky-top">
                          <th scope="col">id</th>
                          <th scope="col">Slot Name</th>
                          <th scope="col">actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slotData && slotData.length > 0 ? (
                          slotData.map((item, index) =>
                            <CommonSlotTableBody
                              item={item}
                              seteditModalShow={seteditModalShow}
                              setdeleteModalShows={setdeleteModalShows}
                              editModalShows={editModalShow}
                              deleteModalShows={deleteModalShow}
                              key={index}

                            />)
                        ) : (
                          <tr>
                            <td colSpan="3">No slot data available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-6 d-flex align-items-center justify-content-center">
                  <img
                    src={slotimage}
                    className="w-75"
                  />
                </div>
              </div>
            </div>
          )}
        </CommonAdminLayout>
      </div>

      <AddSlotModel
        show={addModalShow}
        onHide={() => {
          setaddModalShow(false);
        }
        }
      />
    </>
  );
};

export default AdminParkingSlots;
