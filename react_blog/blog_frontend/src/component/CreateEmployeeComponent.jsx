import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import axios from "axios";

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };

  //kaydetmek
  saveEmployee = (save) => {
    save.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee ==> " + JSON.stringify(employee));

    axios.post('/api/v1/post/employees',employee)
   
  };

  //temizle
  cancel() {
    this.props.history.push("/add-employee");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Müşteri Ekle</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Adı</label>
                    <input
                      placeholder="Adı giriniz"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstName}
                    />
                  </div>

                  <div className="form-group">
                    <label>Soyadı</label>
                    <input
                      placeholder="Soyadı giriniz"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input placeholder="Email giriniz"  name="emailId"  className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailId}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Kaydet
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Temizle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
