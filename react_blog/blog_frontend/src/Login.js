import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: null,
    emailaddres: null,
    password: null,
    repassword: null,
  };

  onChange = (event) => {
    //1.yol :Object Destructuring
    const { name, value } = event.target;

    //2.yol
    // const value=event.target.value;
    // const key=event.target.name;
    this.setState({ [name]: value });
  };

  //button
  buttonSubmitFunction = (event) => {
    event.preventDefault(); //browsera dur birşey yapma diyoruz.

    //1.yol Object Destructuring
    const { username, emailaddres, password } = this.state;
    //1.seçenek eğer key value aynı değerse
    const body = {
      username,
      emailaddres,
      password,
    };

    //2.seçenek
    //const body = {
    //    username: username,
    //    emailaddres: emailaddres,
    //   password: password,
    //  };

    //3.seçenek
    //const body={
    //   username: this.state.username,
    //  emailaddres: this.state.emailaddres,
    //   password: this.state.password
    // };

    //webPack proxy öncesi
    // axios.post("http://localhost:8080/api/logins/create", body);

    //webPack proxy ayar sonrası
    axios.post("/api/logins/create", body);
  };

  render() {
    return (
      //JSX class olduğu için biz className kullalım
      <div className="container">
        <form>
          <h1 className="text-center text-uppercase text-display-2">Login</h1>
          <div className="form-group">
            <label>User name</label>
            <input
              name="username"
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              name="emailaddres"
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              className="form-control"
              type="password"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Re-Password</label>
            <input
              name="repassword"
              className="form-control"
              type="password"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="reset" className="btn btn-danger">
              Temizle
            </button>
            <button
              className="btn btn-primary"
              onClick={this.buttonSubmitFunction}
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
