import React, { Component } from 'react'
import Person from './Person'
import Loading from './Loading'

class PersonList extends Component {   
    render() {
        if(this.props.loading) {
          return <Loading />
        } else {
          return (
            <div className="container mt-3">
                <div className="row">
                    {this.props.personList.map(temp => (
                        <Person temp={temp} key={temp.id}/>
                    ))}
                </div>
            </div>
          ) 
        }
        
    }
}

export default PersonList
