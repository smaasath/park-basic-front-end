import React, { useEffect, useState } from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminBookingDetail.css"
import { useParams } from 'react-router-dom';;

const AdminBookingDetail = () => {

  const { id } = useParams();
  return (
    <div>
      <CommonAdminLayout>
        {/* <div className="AdminBooking-detail-body pt-5 container mt-5">{param}</div> */}
        <div className="AdminBooking-detail-body pt-5 container mt-5">{id}</div>

      </CommonAdminLayout>
    </div>
  );
};

export default AdminBookingDetail;
