import React from "react";
import "./style.css";

function NavTabs() {
    return (
        <>
        <div className="content">
          <ul className="tabs">
            <li>
              <strong>#</strong>
            </li>
            <li>
              <strong>photo</strong>
            </li>
            <li>
              <strong>first name</strong>
            </li>
            <li>
              <strong>last name</strong>
            </li>
          </ul>
        </div>
      </>
    );
}

export default NavTabs;