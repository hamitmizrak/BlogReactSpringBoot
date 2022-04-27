import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import PersonList from './PersonList'

import axios from 'axios'

export class App extends Component {

  //constructor
  constructor(props) {
    super(props)

    //bind: datalar kaybolmasın diye
    this.githubSearchPerson = this.githubSearchPerson.bind(this)

    //bind:arama sonuçlarını silmek
    this.clearList=this.clearList.bind(this);

    this.state = {
      loading: false,
      persons: [],
    }
  }

  //github servisinden arama yapmak
  githubSearchPerson(githubData) {
    this.setState({ loading: true })
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${githubData}`)
        .then((res) => this.setState({ persons: res.data.items, loading: false }))
    }, 1000)
  }

  //arama sonuçlarını temizleme
  clearList(){
      this.setState({
        persons: []
      })
  }

  //cdm==> componentDidMount artık sildim amaç 1-31 data geleceği yerine aramada gelen 1 data daha iyidir

  render() {
    return (
      <>
        <Navbar githubSearchPerson={this.githubSearchPerson} clearList={this.clearList} showButtonList={this.state.persons.length>0 ?"inline-block" : "none" } />
        <PersonList
          personList={this.state.persons}
          loading={this.state.loading}
        />
      </>
    )
  }
}

export default App
