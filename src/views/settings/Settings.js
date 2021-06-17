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
  CInput
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
      <h2 style={{ paddingLeft: "15px" }}>Project Settings</h2>
      <CCol xs="12" lg="12">
        <CButton style={{marginTop: "25px", marginBottom: "15px"}} size="lg" color="info">
          GENERAL
        </CButton>
      </CCol>
      <CCol style={{marginTop: "35px", marginBottom: "15px", fontSize: "20px"}} tag="label" sm="3" className="col-form-label">
                    Project Name
                  </CCol>
      <CCol sm="8" style={{marginTop: "15px", marginBottom: "15px"}}>
        <CInput placeholder="Test User project" value="Test User Project" />
      </CCol>
      <CCol style={{marginTop: "15px", marginBottom: "15px", fontSize: "20px"}} tag="label" sm="3" className="col-form-label">
                    Default BaseURL
                  </CCol>
      <CCol style={{marginTop: "15px", marginBottom: "15px"}} sm="8">
        <CInput placeholder="" value="" />
      </CCol>
    </>
  );
};

export default Roles;
