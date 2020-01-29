import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import employees from "./employees.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      filteredEmployees: [...employees]
    };
  }

  removeEmployee = id => {
    const employees = this.state.employees.filter(
      employee => employee.id !== id
    );

    this.setState({ employees });
    this.setState({ filteredEmployees: employees });
  };

  updateEmployees = (e, department) => {
    e.preventDefault();
    const filteredEmployees = this.state.employees.filter(
      o => o.department === department
    );
    this.setState({ filteredEmployees });
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
          <Wrapper>
            <Title> Employee List</Title>
            <Button updateEmployees={this.updateEmployees} />
            {this.state.filteredEmployees.map(employee => (
              <EmployeeCard
                removeEmployee={this.removeEmployee}
                id={employee.id}
                key={employee.id}
                name={employee.employeeName}
                image={employee.image}
                department={employee.department}
                salary={employee.employeeSalary}
                age={employee.employeeAge}
              />
            ))}
          </Wrapper>
        </Route>
      </Router>
    );
  }
}

export default App;
