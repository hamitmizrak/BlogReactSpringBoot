import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import PersonList from './PersonList'

export class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PersonList />
            </>
        )
    }
}

export default App
