import React, { Component } from 'react'
import axios from "axios";

export default class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.updateEmployee=this.updateEmployee.bind(this);
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

  //güncellemek
  updateEmployee = (update) => {
    update.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee güncel ==> " + JSON.stringify(employee));

    axios.get("/api/v1/put/employees/"+ this.state.id, employee).then((res) => {
     let employee=res.data;
     this.setState({
         firstName:employee.firstName,
         lastName: employee.lastName,
         emailId:employee.emailId
     })
    });
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
                      <input placeholder="Adı giriniz" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstName} />
                    </div>

                    <div className="form-group">
                      <label>Soyadı</label>
                      <input placeholder="Soyadı giriniz" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastName} />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input placeholder="Email giriniz" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailId} />
                    </div>
                    <button className="btn btn-success" onClick={this.updateEmployee} > Kaydet </button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} > Temizle </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
