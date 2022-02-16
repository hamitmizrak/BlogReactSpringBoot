import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
//rcc
export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee=this.addEmployee.bind(this);
  }

  addEmployee(){
    this.props.history.push("/add-employee")
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Müşteri Listesi</h2>
        <div className="row">
          <button className="btn btn-primary btn-small" onClick={this.addEmployee}>Müşteri ekle</button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Adı</th>
                <th>soyadı</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
              this.state.employees.map(
                employee => 
                <tr key={employee.id}>
                  <td>{employee.firstName} </td>
                  <td> {employee.lastName} </td>
                  <td>{employee.emailId} </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
