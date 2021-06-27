import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { FormGroup, Form, Input, InputGroup } from "reactstrap";
export const SmsForm = (props) => {
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
              placeholder="smsListName"
              type="text"
              onChange={props.handleChange}
              value={props.values.smsListName}
              name="smsListName"
              id="smsListName"
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
              placeholder="SMS List"
              type="text"
              onChange={props.handleChange}
              value={props.values.smsList}
              name="smsList"
              id="smsList"
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
        <CheckIcon onClick={props.handleSubmit} />
        <CloseIcon onClick={() => props.setEditedRow({})} />
      </td>
    </tr>
  );
};
