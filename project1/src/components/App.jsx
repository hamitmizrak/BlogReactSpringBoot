import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import PersonList from './PersonList'
import axios from 'axios'

export class App extends Component {
    //constructor
    constructor(props) {
        super(props)
        this.state={
            persons:[],
            loading:false  //loading
        }
    }

    //cdm
    componentDidMount() {
        //loading

        //loading time 4s
        this.setState({loading:true});
        setTimeout(() => {
            axios
            .get('https://api.github.com/users')
            .then(response=>{
                //return console.log(response)
                //return console.log(response.data)
                return this.setState({
                    persons:response.data,
                    loading:false
                });
            });
        }, 1000);
    }
    
    render() {
        return (
            <>
                <Navbar />
                {/* personList props olarak: person44 olarak gider*/}
                <PersonList persons44={this.state.persons} loading={this.state.loading} />
            </>
        )
    }
}

export default App
