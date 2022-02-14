import React from "react";

class Login extends React.Component {
  state = {
    username: null,
    emailaddres: null,
    password: null,
    repassword: null,
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };


  onChangeEmail = (event) => {
    this.setState({
        emailaddres: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onChangeRepassword=(event)=>{
      this.setState({
          repassword:event.target.value
      })
  }

  render() {
    return (
      <form>
        <h1>Login</h1>
        <div>
          <label>User name</label>
          <input  onChange={this.onChangeUsername} />
        </div>
        <div>
          <label>Email Address</label>
          <input  onChange={this.onChangeEmail} />
        </div>
        <div>
          <label>Password</label>
          <input  type="password" onChange={this.onChangePassword} />
        </div>
        <div>
          <label>Re-Password</label>
          <input  type="password" onChange={this.onChangeRepassword}/>
        </div>
        <div>
          <button>Sign </button>
        </div>
      </form>
    );
  }
}

export default Login;
