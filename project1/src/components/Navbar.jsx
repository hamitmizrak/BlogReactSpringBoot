import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  constructor(props) {
    super(props)
    //bind:veri kaybolmaması icin
    this.onChange = this.onChange.bind(this)

    //bind:veri kaybolmaması icin
    this.onSubmit = this.onSubmit.bind(this)

    //state
    this.state = {
      githubData: ''
    }
  }

  //input içine birşeyler yazıldığında hemen almak istediğimizde
  onChange(e) {
    //console.log(e.target.value);
    this.setState({
      githubData: e.target.value,
    })
  }

  //input içine birşeyler yazıldıktan sonra submit edildiğinde
  onSubmit(e) {
    //sayfa yenilemeden
    e.preventDefault()

    if(this.state.githubData === '') {
      window.alert("Boş giremezsiniz")
    } else {
      // console.log(this.state.data)
      this.props.githubSearchPerson(this.state.githubData)

      //input içindeki data silinmesini istiyorsak
      this.setState({ githubData: '' })
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            <i
              className={this.props.icon}
              style={{ color: 'yellow', marginLeft: '1%' }}
            ></i>{' '}
            {this.props.content}
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            {/* search için */}
            <form onSubmit={this.onSubmit} className="d-flex my-2 my-lg-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control me-sm-2"
                  value={this.state.githubData}
                  onChange={this.onChange}
                  placeholder="Arama için yazınız..."
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-outline-success my-2 my-sm-0"
                  >
                    Arama
                  </button>

                  <button
                    style={{ display: this.props.showButtonList }}
                    onClick={this.props.clearList}
                    type="button"
                    className="btn btn-outline-warning"
                  >
                    Temizle
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.defaultProps = {
  content: 'Github',
  icon: 'fa-brands fa-github-alt',
}

Navbar.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
