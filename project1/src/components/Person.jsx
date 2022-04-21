import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        const {id,login,avatar_url,html_url} = this.props.peson;
        return (
                <div className="col-sm-6 col-md-4  col-lg-3">
                    <div className="card">
                        <img src={avatar_url} alt={id} />
                        <div className="card-body">
                        <p className="card-title">{id}</p>
                            <h6 className="card-title">{login}</h6>
                            <a className="btn btn-danger " href={html_url} target="_blank" >GitHub Link</a>
                        </div>
                    </div>
                </div>
        )
    }
}

