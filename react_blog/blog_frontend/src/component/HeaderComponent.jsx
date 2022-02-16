import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
          <header>
              <nav className="navnar navbar-expand-md navbar-dark bg-dark">
                  <div><a href="https://hamitmizrak.com" className="navbar-brand">Spring Boot - React </a> </div>
              </nav>
          </header>
      </div>
    )
  }
}
