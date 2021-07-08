import React from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CFormGroup,
  CSelect,
  CLabel,
  CInputRadio,
} from "@coreui/react";
import { Input } from "@material-ui/core";
export const CroneLists = () => {
  return (
    <>
      <CCol xs="6" md="6" className="mb-4 mx-auto">
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Minutes</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Hourly</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Daily</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Weekly</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Monthly</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Yearly</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent className="py-5">
                <CTabPane className="pl-5">
                  Every
                  <CFormGroup className="d-inline px-2">
                    <CSelect
                      custom
                      name="ccmonth"
                      id="ccmonth"
                      className="d-inline"
                      style={{ width: "auto" }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                  Minute (s)
                </CTabPane>
                <CTabPane className="pl-5">
                  <CInputRadio
                    className="form-check-input pt-2 mt-2 pt-1"
                    id="radio1"
                    name="radios"
                    value="option1"
                  />
                  <CLabel variant="checkbox" htmlFor="radio1">
                    <div className="d-inline">Every</div>
                    <CFormGroup className="d-inline px-2">
                      <CSelect
                        custom
                        name="ccmonth"
                        id="ccmonth"
                        className="d-inline"
                        style={{ width: "auto" }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                      </CSelect>
                    </CFormGroup>
                    hour (s)
                  </CLabel>
                  <div>
                    <CInputRadio
                      className="form-check-input pt-2 mt-2 pt-1"
                      id="radio1"
                      name="radios"
                      value="option1"
                    />

                    <CLabel variant="checkbox" htmlFor="radio1">
                      <span>Every</span>
                      <CFormGroup className="d-inline px-2">
                        <Input type="number" />
                        <span className="d-inline px-3">:</span>
                        <Input type="number" min="0" max="23" />
                      </CFormGroup>
                      <span>Hour(s)</span>
                    </CLabel>
                  </div>
                </CTabPane>
                <CTabPane className="pl-5">
                  <CInputRadio
                    className="form-check-input pt-2 mt-2 pt-1"
                    id="radio1"
                    name="radios"
                    value="option1"
                  />
                  <CLabel variant="checkbox" htmlFor="radio1">
                    <div className="d-inline">Everyday</div>
                  </CLabel>
                  <div>
                    <CInputRadio
                      className="form-check-input pt-2 mt-2 pt-1"
                      id="radio1"
                      name="radios"
                      value="option1"
                    />

                    <CLabel variant="checkbox" htmlFor="radio1">
                      <span className="d-block">Every weekday</span>
                      <div className="d-inline">Starts at</div>
                      <CFormGroup className="d-inline px-2">
                        <Input type="number" />
                        <span className="d-inline px-3">:</span>
                        <Input type="number" min="0" max="23" />
                      </CFormGroup>
                      <span>Hour(s)</span>
                    </CLabel>
                  </div>
                </CTabPane>
                <CTabPane className="pl-5">
                  <div>
                    <CInputRadio
                      className="form-check-input pt-2 mt-2 pt-1"
                      id="radio1"
                      name="radios"
                      value="option1"
                    />

                    <CLabel variant="checkbox" htmlFor="radio1">
                      <CFormGroup className="d-inline px-2">
                        <CSelect
                          custom
                          name="ccmonth"
                          id="ccmonth"
                          className="d-inline"
                          style={{ width: "auto" }}
                        >
                          <option value="1">Monday</option>
                          <option value="2">Tuesday</option>
                          <option value="3">Wednesday</option>
                          <option value="4">Thursday</option>
                          <option value="6">Friday</option>
                          <option value="12">Sunday</option>
                        </CSelect>
                      </CFormGroup>
                      <div className="d-block py-3">
                        Starts at
                        <CFormGroup className="d-inline px-2">
                          <Input type="number" />
                          <span className="d-inline px-3">:</span>
                          <Input type="number" min="0" max="23" />
                        </CFormGroup>
                        <span>Hour(s)</span>
                      </div>
                    </CLabel>
                  </div>
                </CTabPane>
                <CTabPane className="pl-5">
                  <div>
                    <CInputRadio
                      className="form-check-input pt-2 mt-2 pt-1"
                      id="radio1"
                      name="radios"
                      value="option1"
                    />

                    <CLabel variant="checkbox" htmlFor="radio1">
                      <span>Day</span>
                      <CFormGroup className="d-inline px-2">
                        <Input type="text" />
                      </CFormGroup>
                      <span>of every</span>
                      <CFormGroup className="d-inline px-2">
                        <CSelect
                          custom
                          name="ccmonth"
                          id="ccmonth"
                          className="d-inline"
                          style={{ width: "auto" }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="6">4</option>
                          <option value="12">5</option>
                          <option value="12">6</option>
                        </CSelect>
                      </CFormGroup>
                      <span>month(s)</span>

                      <div className="d-block py-3">
                        The
                        <CFormGroup className="d-inline px-2">
                          <CSelect
                            custom
                            name="ccmonth"
                            id="ccmonth"
                            className="d-inline"
                            style={{ width: "auto" }}
                          >
                            <option value="1">First</option>
                            <option value="2">Second</option>
                            <option value="3">Third</option>
                            <option value="4">Fourth</option>
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup className="d-inline px-2">
                          <CSelect
                            custom
                            name="ccmonth"
                            id="ccmonth"
                            className="d-inline"
                            style={{ width: "auto" }}
                          >
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="4">Thursday</option>
                            <option value="6">Friday</option>
                            <option value="12">Sunday</option>
                          </CSelect>
                        </CFormGroup>
                        <span>of every</span>
                        <CFormGroup className="d-inline px-2">
                          <CSelect
                            custom
                            name="ccmonth"
                            id="ccmonth"
                            className="d-inline"
                            style={{ width: "auto" }}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="6">5</option>
                            <option value="12">6</option>
                          </CSelect>
                        </CFormGroup>
                        <span>months</span>
                        <div className="d-block py-3">
                          Starts at
                          <CFormGroup className="d-inline px-2">
                            <Input type="number" />
                            <span className="d-inline px-3">:</span>
                            <Input type="number" min="0" max="23" />
                          </CFormGroup>
                          <span>Hour(s)</span>
                        </div>
                      </div>
                    </CLabel>
                  </div>
                </CTabPane>

                <CTabPane>
                  Every
                  <CFormGroup className="d-inline px-2">
                    <CSelect
                      custom
                      name="ccmonth"
                      id="ccmonth"
                      className="d-inline"
                      style={{ width: "auto" }}
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">Aprail</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                  <CFormGroup className="d-inline px-2">
                    <CSelect
                      custom
                      name="ccmonth"
                      id="ccmonth"
                      className="d-inline"
                      style={{ width: "auto" }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                  <div className="d-block py-3">
                    The
                    <CFormGroup className="d-inline px-2">
                      <CSelect
                        custom
                        name="ccmonth"
                        id="ccmonth"
                        className="d-inline"
                        style={{ width: "auto" }}
                      >
                        <option value="1">First</option>
                        <option value="2">Second</option>
                        <option value="3">Third</option>
                        <option value="4">Fourth</option>
                      </CSelect>
                    </CFormGroup>
                    <CFormGroup className="d-inline px-2">
                      <CSelect
                        custom
                        name="ccmonth"
                        id="ccmonth"
                        className="d-inline"
                        style={{ width: "auto" }}
                      >
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="6">Friday</option>
                        <option value="12">Sunday</option>
                      </CSelect>
                    </CFormGroup>
                    <span>of</span>
                    <CFormGroup className="d-inline px-2">
                      <CSelect
                        custom
                        name="ccmonth"
                        id="ccmonth"
                        className="d-inline"
                        style={{ width: "auto" }}
                      >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">Aprail</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </CSelect>
                    </CFormGroup>
                    <div className="d-block pt-3">
                      <div className="d-inline">Starts at</div>
                      <CFormGroup className="d-inline px-2">
                        <Input type="number" />
                        <span className="d-inline px-3">:</span>
                        <Input type="number" min="0" max="23" />
                      </CFormGroup>
                    </div>
                  </div>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};
