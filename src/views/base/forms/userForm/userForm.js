import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { FormGroup, Form, Input, InputGroup } from "reactstrap";
export const UserForm = (props) => {
  return (
    // <Form role="form" onSubmit={props.handleSubmit}>

    <tr>
      <td>
        <FormGroup
          className={
            props.errors.firstName ? "mb-3 border border-danger" : "mb-3"
          }
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="First Name"
              type="text"
              onChange={props.handleChange}
              value={props.values.firstName}
              name="firstName"
              id="firstName"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>

      <td>
        <FormGroup
          className={
            props.errors.lastName ? "mb-3 border border-danger" : "mb-3"
          }
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Last Name"
              type="text"
              onChange={props.handleChange}
              value={props.values.lastName}
              name="lastName"
              id="lastName"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup
          className={props.errors.email ? "mb-3 border border-danger" : "mb-3"}
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Email"
              type="email"
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              id="email"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Date Created"
              type="text"
              value={props.dateCreated}
              onChange={props.handleChange}
              name="dateCreated"
              id="dateCreated"
              readOnly
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Date Modified"
              type="text"
              value={props.dateModified}
              onChange={props.handleChange}
              name="dateModified"
              id="dateModified"
              readOnly
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup
          className={
            props.errors.address ? "mb-3 border border-danger" : "mb-3"
          }
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Address"
              type="text"
              onChange={props.handleChange}
              value={props.values.address}
              name="address"
              id="address"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup
          className={
            props.errors.telephone ? "mb-3 border border-danger" : "mb-3"
          }
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Phone #"
              type="text"
              onChange={props.handleChange}
              value={props.values.telephone}
              name="telephone"
              id="telephone"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <FormGroup
          className={
            props.errors.userRoles ? "mb-3 border border-danger" : "mb-3"
          }
        >
          <InputGroup className="input-group-alternative">
            <Input
              placeholder="Role"
              type="text"
              onChange={props.handleChange}
              value={props.values.userRoles}
              name="userRoles"
              id="userRoles"
            ></Input>
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <CheckIcon onClick={props.handleSubmit} />
        <CloseIcon onClick={() => props.setEditedRow({})} />
      </td>
    </tr>
  );
};
