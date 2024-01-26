import React, { useEffect, useState } from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminBookingDetail.css";
import { useParams } from "react-router-dom";
import { getBookingById } from "../../../redux/actions/BookingActions";
import { useDispatch } from "react-redux";
import CommonLoading from "../../../components/common/CommonLoading/CommonLoading";
import { toast, ToastContainer } from "react-toastify";

const AdminBookingDetail = () => {
  const { id } = useParams();
  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    dispatch(
      getBookingById(id, (res) => {
        if (res.status == 200) {
          setloading(false);
          setBookingDetails(res.data.data);
        } else if (res.status == 404) {
          toast.error("Booking not found", {
            autoClose: 1000,
          });
        } else {
          toast.error("Some thing went worng! Try again!", {
            autoClose: 1000,
          });
        }
      })
    );
  }, []);

  function CommonDetail({ heading, content }) {
    return (
      <div className="row mt-3">
        <div className="col-sm-6 d-flex align-items-start">
          <h6>{heading}</h6>
        </div>
        <div className="col-sm-6 d-flex  align-items-end justify-content-end">
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CommonAdminLayout>
        {loading == true ? (
          <>
            <div
              style={{ height: "100vh" }}
              className="p-3 d-flex align-items-center justify-content-center"
            >
              <CommonLoading onlySpin={true} />
            </div>
            <ToastContainer autoClose={1000} />
          </>
        ) : (
          <>
            <div className="AdminBooking-detail-body pt-5 mt-5">
              <div className="row gap-5 d-flex align-items-start justify-content-center">
                <div className="col-md-5 rounded-4 booking-box  p-4">
                  <div className="row">
                    <h3>Bookings</h3>
                  </div>
                  <CommonDetail
                    heading={"Booking Id"}
                    content={"B0" + bookingDetails?.booking_data?.id}
                  />
                  <CommonDetail
                    heading={"Booking Date"}
                    content={bookingDetails?.booking_data?.Date}
                  />
                  <CommonDetail
                    heading={"Booking Time"}
                    content={bookingDetails?.booking_data?.Time}
                  />
                  <CommonDetail
                    heading={"Slot Name"}
                    content={bookingDetails?.booking_slot_data?.slotName}
                  />
                  <CommonDetail
                    heading={"Time Interval"}
                    content={bookingDetails?.booking_time_data?.bookingTime}
                  />
                </div>
                <div className="col-md-5 rounded-4 booking-box  p-4">
                  <div className="row">
                    <h3>Reserver</h3>
                  </div>
                  <CommonDetail
                    heading={"Reserver Name"}
                    content={
                      bookingDetails?.user_data?.first_name +
                      " " +
                      bookingDetails?.user_data?.last_name
                    }
                  />
                  <CommonDetail
                    heading={"Email"}
                    content={bookingDetails?.user_data?.email}
                  />
                  <CommonDetail
                    heading={"Phone Number"}
                    content={bookingDetails?.reserver_data?.phnNo}
                  />
                  <CommonDetail
                    heading={"Car Number"}
                    content={bookingDetails?.reserver_data?.carNo}
                  />
                  <CommonDetail
                    heading={"Time Interval"}
                    content={bookingDetails?.booking_time_data?.bookingTime}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </CommonAdminLayout>
    </div>
  );
};

export default AdminBookingDetail;
