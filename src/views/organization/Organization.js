import React, { lazy, useState, useEffect } from "react";
import { organizationValidationSchema } from "../../validationSchemas/organizationValidationSchema";
import { Formik } from "formik";
import noImg from "../../assets/images/noImg.jpg";
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
  CCardHeader,
  CInput,
} from "@coreui/react";
import _ from "lodash";
import axios from "axios";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Container, Button } from "@material-ui/core";
import { OrganizationForm } from "../base/forms/organizationForm/organizationForm";
import { useDispatch, useSelector } from "react-redux";
import * as OrganizationActionCreator from "../../redux/actionsCreator/organizationActionCreator";
import { Label } from "reactstrap";
import { Spinner } from "../widgets/ui/loader";

const Organization = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.organizationReducer.response);
  const loading = useSelector((state) => state.organizationReducer.loading);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    activeTab === 0 && dispatch(OrganizationActionCreator.getOrganization());
  }, [dispatch, activeTab]);

  const [editedRow, setEditedRow] = useState({});
  const initialValues = {
    organizationName: "",
    dateCreated: "",
    dateModified: "",
  };
  const [formValues, setFormValues] = useState({
    organizationName: null,
    userEmail: null,
    organizationLogo: [],
  });
  const [file, setFile] = useState([]);

  const updateOrganizationData = (data) => {
    // console.log(data);
    // console.log(editedRow);
    // let tempResponse = _.cloneDeep(response);
    // let tempEditesRow = _.cloneDeep(editedRow);
    let newData = {};
    newData.organizationName = data.organizationName;
    // newData.organizationLogo = "ajgs";
    // newData.organizationId = tempEditesRow.item.organizationId;
    newData.adminUserEmail = "sds@gmail.com";

    // tempEditesRow.item.organizationName = data.organizationName;
    // tempEditesRow.item.organizationLogo = "sdsd";
    // tempEditesRow.item.imageUrl = "sds";
    // tempEditesRow.item.adminUserEmail = "sds@gmail.com";
    // console.log(tempEditesRow);
    // tempResponse[tempEditesRow.key] = newData;

    // dispatch(
    //   OrganizationActionCreator.updateOrganization({
    //     organizationList: tempResponse,
    //     data: newData,
    //   })
    // );
    // setEditedRow({});

    let formData = new FormData();
    formData.append(
      "organization",
      new Blob(
        [
          JSON.stringify({
            organizationName: newData.organizationName,
            adminUserEmail: "gggdss@xssss.xom",
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    const headers = {
      // "Content-Type": "multipart/formdata",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6MSwic3ViIjoiaGFtbWFkLnp1YmFpckBnbWFpbC5jb20iLCJleHAiOjE2MjM2NDQ5ODYsInVzZXJJZCI6MSwiaWF0IjoxNjIzNjQ0Njg2fQ.qbfZKSJHKoTteZsdricBtcqGVj8PLxMXWIv6gUmMucs",
    };

    axios
      .put(
        "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/organizations",
        formData,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };

  const createOrganization = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append(
      "organization",
      new Blob(
        [
          JSON.stringify({
            organizationName: formValues.organizationName,
            adminUserEmail: "gggdss@xssss.xom",
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    const headers = {
      "Content-Type": undefined,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6MSwic3ViIjoiaGFtbWFkLnp1YmFpckBnbWFpbC5jb20iLCJleHAiOjE2MjM2NDQ5ODYsInVzZXJJZCI6MSwiaWF0IjoxNjIzNjQ0Njg2fQ.qbfZKSJHKoTteZsdricBtcqGVj8PLxMXWIv6gUmMucs",
    };

    axios
      .post(
        "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/organizations",
        formData,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});

    // e.preventDefault();
    // formValues.userEmail = formValues.userEmail.replace("\t", "");
    // console.log(formValues);
    // console.log(formData);

    // dispatch(OrganizationActionCreator.postOrganization(formData));
  };
  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const deleteOrganization = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    tempResponse.splice(key, 1);
    dispatch(
      OrganizationActionCreator.deleteOrganization({
        organizationList: tempResponse,
        item: item,
      })
    );
  };

  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      {!loading ? (
        <CCol xs="4" md="4" className="mb-4 mt-5 pt-5 mx-auto text-center">
          <CCard
            style={{
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                backgroundColor: "black"
            }}
          >
            <CCardHeader>Organization</CCardHeader>
            <div className="d-inline ml-auto">
              <EditIcon style={{color: "#00DB79"}} className="d-inline ml-auto m-3" />
            </div>
            <CCardBody className="p-3 pb-0 mb-3">
              <img
                width="175px"
                height="175px"
                className=" rounded-circle d-block mx-auto"
                src={
                  response?.organizationLogo ? response.organizationLogo : noImg
                }
              />
              <Label className="pt-2 text-center ">
                <span style={{ fontWeight: "bold", fontSize: "35px", color: "white" }}>
                  {response?.organizationName.toUpperCase()}
                </span>
              </Label>
            </CCardBody>
          </CCard>
        </CCol>
      ) : (
        <Spinner height="120" width="120" />
      )}
    </>
  );
};

export default Organization;
