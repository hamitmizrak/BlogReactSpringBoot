import React, { Component } from 'react'
import Person from './Person'

export default class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    id: 1,
                    login: "hamitmizrak",
                    avatar_url: "https://avatars.githubusercontent.com/u/15179871?v=4",
                    html_url: "https://github.com/hamitmizrak",
                  },
                  {
                    id: 2,
                    login: "hamitmizrak",
                    avatar_url: "https://avatars.githubusercontent.com/u/15179871?v=4",
                    html_url: "https://github.com/hamitmizrak",
                  },
                  {
                    id: 3,
                      login: "hamitmizrak",
                      avatar_url: "https://avatars.githubusercontent.com/u/15179871?v=4",
                      html_url: "https://github.com/hamitmizrak",
                  },
                  {
                    id: 4,
                    login: "hamitmizrak",
                    avatar_url: "https://avatars.githubusercontent.com/u/15179871?v=4",
                    html_url: "https://github.com/hamitmizrak",
                  }
            ]
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.state.persons.map(temp => (
                        <Person peson={temp} key={temp.id} />
                    ))}
                </div>
            </div>
        )
    }
}

