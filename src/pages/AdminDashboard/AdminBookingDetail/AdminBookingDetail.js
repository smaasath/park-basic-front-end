import React, { useEffect, useState } from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminBookingDetail.css";

const AdminBookingDetail = ({item}) => {

   
  return (
    <div>
      <CommonAdminLayout>
        <div className="AdminBooking-detail-body pt-5 container mt-5">{item}</div>
      </CommonAdminLayout>
    </div>
  );
};

export default AdminBookingDetail;
