import React, { Component } from 'react'
import Person from './Person'
import Loading from './Loading'

export default class PersonList extends Component {
  //state kaldırdım
  render() {
    if (this.props.loading) {
      return <Loading />
    } else {
      return (
        <div className="container mt-3">
          <div className="row">
            {this.props.persons44.map((
              temp, //
            ) => (
              <Person peson55={temp} key={temp.id} />
            ))}
          </div>
        </div>
      )
    }
  }
}
