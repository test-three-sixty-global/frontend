import React, { lazy } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from "@coreui/react";

import usersData from "../users/TestsData";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const getBadge = status => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["NAME", "REGISTERED", "ROLE", "STATUS", "KIND"];
const Roles = () => {
  return (
    <>
    <h2 style={{paddingLeft: "15px"}}>Test Library</h2>
      <CCol xs="12" lg="12">
        <CCard>
          {/* <CCardHeader></CCardHeader> */}
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              bordered
              itemsPerPage={5}
              pagination
              scopedSlots={{
                status: item => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                )
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default Roles;
