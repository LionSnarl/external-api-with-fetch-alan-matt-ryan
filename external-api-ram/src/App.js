import React, { Component } from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ipObject: ""
      nasa: null ,
      pic: null
    }
  }

  getIp = () => {
    fetch('https://ipapi.co/json/')
    .then(resp => {
      return resp.json()
    })
    .then(payload => {
      this.setState({ ipObject: payload })
    })
    .catch(error => {
      console.log(error);
    })
  }

render() {
  return (
    <>
      <h1>Check IP Address</h1>
      <button onClick={ this.getIp }>Click here for IP!</button>
      <p>IP:{ this.state.ipObject.ip }</p>
      <p>City:{ this.state.ipObject.city }</p>
    </>
    )
  }
}

export default App;
