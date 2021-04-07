import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
      <>
          <div className="content">
            <ul className="card">
              <li>
                <img src={props.img}></img>
              </li>
              <li>
                {props.first}
              </li>
              <li>
                {props.last}
              </li>
            </ul>
          </div>
        </>
      );
}

export default EmployeeCard;