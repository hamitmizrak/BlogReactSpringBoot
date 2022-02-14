import React from "react";

class Login extends React.Component {

  render() {
    return (
      <form>
        <h1>Login</h1>
        <div>
          <label>User name</label>
          <input />
        </div>
        <div>
          <label>Email Address</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Re-Password</label>
          <input type="password" />
        </div>
        <div>
          <button>Sign </button>
        </div>
      </form>
    );
  }
}

export default Login;
