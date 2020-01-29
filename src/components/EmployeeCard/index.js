import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong>
            {props.name}
          </li>
          <li>
            <strong>Age:</strong>
            {props.age}
          </li>
          <li>
            <strong>Department:</strong>
            {props.department}
          </li>
          <li>
            <strong>Salary:</strong>
            {props.salary}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        x
      </span>
    </div>
  );
}

export default EmployeeCard;