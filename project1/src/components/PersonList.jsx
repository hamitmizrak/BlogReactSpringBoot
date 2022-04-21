import React, { Component } from 'react'

export default class PersonList extends Component {
    constructor(props){
        super(props)
        this.state={
            person:[
                    {
                      login: "mojombo",
                      name: "name-1",
                      id: 1,
                      node_id: "MDQ6VXNlcjE=",
                      html_url: "https://github.com/mojombo"
                    },
                    {
                      login: "defunkt",
                      name: "name-2",
                      id: 2,
                      node_id: "MDQ6VXNlcjI=",
                      html_url: "https://github.com/defunkt"
                    },
                    {
                      login: "pjhyett",
                      name: "name-3",
                      id: 3,
                      node_id: "MDQ6VXNlcjM=",
                      html_url: "https://avatars.githubusercontent.com/u/3?v=4"
                    }
            ]
        }
    }
  render() {
    return (
        <>
        <p>PersonList</p>
        <p> {this.state.person.map(temp=>  {return <div>{temp.login}</div> } )}</p>
        </>
    )
  }
}
