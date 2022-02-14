import React from "react";

class Login extends React.Component {
  state = {
    username: null,
    emailaddres: null,
    password: null,
    repassword: null,
  };

  onChange = (event) => {
    //1.yol :Object Destructuring
    const {name,value} = event.target;

    //2.yol
      // const value=event.target.value;
    // const key=event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <h1>Login</h1>
        <div>
          <label>User name</label>
          <input name="username" onChange={this.onChange} />
        </div>
        <div>
          <label>Email Address</label>
          <input name="emailaddres" onChange={this.onChange} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" onChange={this.onChange} />
        </div>
        <div>
          <label>Re-Password</label>
          <input name="repassword" type="password" onChange={this.onChange} />
        </div>
        <div>
          <button>Sign </button>
        </div>
      </form>
    );
  }
}

export default Login;
