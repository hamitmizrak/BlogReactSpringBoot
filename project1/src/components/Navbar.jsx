import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <i className={this.props.icon}
                           style={{color: 'yellow', marginLeft: "1%"}}></i> {this.props.content}
                    </a>

                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    content: 'Github',
    icon: 'fa-brands fa-blogger'
}

Navbar.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
