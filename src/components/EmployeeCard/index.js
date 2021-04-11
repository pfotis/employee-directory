import React from "react";
import { MDBDataTable } from "mdbreact";
import "./employeecard.css";

function EmployeeCard(props) {
  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 500,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 250,
      }
    ],
    rows:props.employees
  };
    return (
      <MDBDataTable sorting={true} striped bordered data={data} />
    );
}

export default EmployeeCard;