import React, { lazy } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CInput,
  CListGroupItem,
  CListGroup
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
const fields = ["name", "registered", "role", "status", "kind"];
const Roles = () => {
  return (
    <>
      <h2 style={{ paddingLeft: "15px" }}>Project Teammates</h2>
      <CCol sm="12" xl="12">
        <CCard>
          <CCardBody>
            <CListGroup>
              <CListGroupItem action>
                <h5>John Doe</h5>
                <div>John@Doe.com</div>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default Roles;
