import React from "react";

function EmployeeCard(props) {
    return (
      <>
      <h3>Card</h3>
        <div className="card">
          <div className="img-container">
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.first}
              </li>
            </ul>
          </div>
        </div>
        </>
      );
}

export default EmployeeCard;