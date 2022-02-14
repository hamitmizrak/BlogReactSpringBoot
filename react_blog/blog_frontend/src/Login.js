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
        const {name, value} = event.target;

        //2.yol
        // const value=event.target.value;
        // const key=event.target.name;
        this.setState({[name]: value});
    };

    //button
    buttonSubmitFunction = (event) => {
        event.preventDefault(); //browsera dur birşey yapma diyoruz.

        //1.yol Object Destructuring
        const {username, emailaddres, password} = this.state;
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
            <form>
                <h1>Login</h1>
                <div>
                    <label>User name</label>
                    <input name="username" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Email Address</label>
                    <input name="emailaddres" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Re-Password</label>
                    <input name="repassword" type="password" onChange={this.onChange}/>
                </div>
                <div>
                    <button onClick={this.buttonSubmitFunction}>Sign</button>
                </div>
            </form>
        );
    }
}

export default Login;
