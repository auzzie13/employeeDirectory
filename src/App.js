import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
// import API from "./utils/API"
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  // componentDidMount() {
  //   API.search(query)
  //   .then(res => this.setState({ results: res.data.data}))
  // }

  removeEmployee = id => {
    const employees = this.state.employees.filter(
      employee => employee.id !== id
    );

    this.setState({ employees });
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
        <Wrapper>
          <Title> Employee List</Title>
          {this.state.employees.map(employee => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              id={employee.id}
              key={employee.id}
              name={employee.employeeName}
              image={employee.image}
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
