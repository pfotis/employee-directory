import React from "react";
import { MDBDataTable } from "mdbreact";
import "./employeecard.css";

function EmployeeCard(props) {
  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 150,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 150,
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
        width: 150,
      }
    ],
    rows:props.employees
  };
    return (
      <MDBDataTable sorting={true} striped bordered data={data} />
    );
}

export default EmployeeCard;