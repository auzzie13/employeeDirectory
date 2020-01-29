import React, { useState } from "react";
import "./style.css";

function Button(props) {
  const [isOpen, setIsOpen] = useState(false);
  const departments = [
    "IT",
    "HR",
    "CEO",
    "Intern",
    "Marketing",
    "Management",
    "Sales",
    "Finance"
  ];

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const dropdownStyle = isOpen ? "dropdown show" : "dropdown";
  const menuStyle = isOpen ? "dropdown-menu show" : "dropdown-menu";

  return (
    <div className={dropdownStyle}>
      <button
        onClick={toggleDropdown}
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Departments
      </button>
      <div className={menuStyle} aria-labelledby="dropdownMenuButton">
        {departments.map(department => (
          <a
            className="dropdown-item"
            key={department}
            onClick={e => props.updateEmployees(e, department)}
            href="/"
          >
            {department}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Button;
