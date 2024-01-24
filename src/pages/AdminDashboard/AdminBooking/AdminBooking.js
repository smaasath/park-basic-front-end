import React, { useEffect, useState } from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminBooking.css";
import viewicon from "../../../assests/pictures/viewicon.png";
import { getAllBookings } from "../../../redux/actions/BookingActions";
import { useDispatch, useSelector } from "react-redux";
import AdminBookingDetail from "../AdminBookingDetail/AdminBookingDetail";
import { useNavigate } from "react-router-dom";

const AdminBooking = () => {
  const [booking, setbookings] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllBookings((res) => {
        console.log(res.data.data);
        setbookings(res.data.data);
      })
    );
  }, []);

  const opendetailPage = (item) => {
    navigate(`/AdminBookingDetails/${1}`);
  };

  return (
    <div>
      <CommonAdminLayout>
        <div className="container AdminBooking-body pt-5">
          {/* <div className="row">
            <div className="col">
              <select
                classNames="selectpicker outline "
                data-live-search="true"
                placeholder="Filter"
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div class="col"></div>
            <div className="col"></div>
            <div className="col">
              <form className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div> */}
        </div>

        <div className="container mt-5">
          <div style={{ maxHeight: "475px", overflowY: "scroll" }}>
            <table className="table table-striped">
              <thead>
                <tr className="sticky-top">
                  <th classNamee="col-1">Id</th>
                  <th className="col-2">Date</th>
                  <th className="col-2">Time</th>
                  <th className="col-1">Slot</th>
                  <th className="col-2">Car no</th>
                  <th className="col-3">Reserver Name</th>
                  <th className="col-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {booking &&
                  booking.map((data, index) => (
                    <tr key={index}>
                      <td className="col-1">{data.booking_data?.id}</td>
                      <td className="col-2">{data.booking_data?.Date}</td>
                      <td className="col-2">{data.booking_data?.Time}</td>
                      <td className="col-1">
                        {data.booking_slot_data?.slotName}
                      </td>
                      <td className="col-2">{data.reserver_data?.carNo}</td>
                      <td className="col-3">
                        {data.user_data?.first_name} {data.user_data?.last_name}
                      </td>
                      <td className="col-1">
                        <img
                          onClick={opendetailPage}
                          src={viewicon}
                          style={{ height: 25, width: 25 }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </CommonAdminLayout>
    </div>
  );
};

export default AdminBooking;
