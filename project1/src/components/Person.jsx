import React, { Component } from 'react'

class Person extends Component {

    render() {
        const info={
            id:"id",
            login:"Login",
            follow:"Follow",
            github:"GitHub"
        }
        const {login,id,avatar_url,html_url,followers_url} = this.props.temp;
        return (
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid"/>
                        <div className="card-body">
                             <p className="card-title"> <span style={{color:"lightsalmon"}}>{info.id}:</span> {id}</p>
                             <h6 className="card-title"><span style={{color:"lightsalmon"}}>{info.login}:</span>{login}</h6>
                            <a href={followers_url} className="btn btn-outline-primary btn-sm"><i
                                className="fa-solid fa-paper-plane"></i>{info.login}: Follow</a>
                            <a href={html_url} className="btn btn-outline-success btn-sm"><i
                                className="fa-brands fa-github"></i>GitHub</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Person
