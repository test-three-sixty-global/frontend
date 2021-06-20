import React, { lazy, useState } from "react";
import {
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import { DocsLink } from 'src/reusable'

import usersData from "../users/TestsData";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));


const Site = () => {
    const [active, setActive] = useState(1)
    return (
    <>
      <CCol xs="12" md="12" className="mb-4">
        <h2>asdij</h2>
      </CCol>
    </>
  );
};

export default Site;
