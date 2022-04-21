import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Nav extends Component {
  render() {
    return (
      <div>
 <nav className="navbar navbar-dark bg-primary " >
     <a href={this.props.url} style={{color:"#"+this.props.colorObject}} className="navbar-brand">
     <i className={this.props.icon}></i>
          {this.props.title}  </a>

     </nav>
      </div>
    )
  }
}
// default değer için
Nav.defaultProps={
    url:"http://www.google.com"
} 

//props için validation (propTypes)
Nav.propTypes = {
    url:PropTypes.string.isRequired,
    colorObject:PropTypes.number.isRequired,
}

