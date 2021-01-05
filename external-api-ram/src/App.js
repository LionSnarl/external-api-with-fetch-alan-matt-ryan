import React, { Component } from 'react'
// import apod from './nasaData.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ipObject: "" ,
      pic: null ,
      nasa: null
    }
  }
  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(resp => {
      console.log(resp);
      return resp.json()
    })
    .then(payload => {
      this.setState({ pic: payload.hdurl, nasa: payload.explanation })
    })
    .catch(errors => {
      console.log(errors);
    })
  }
// getNas = () => {
//   fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
//   .then(resp => {
//     return resp.json()
//   })
// }



  // getNasa = () => {
  //   this.setState ({ pic: this.state.hdurl })
  //   // console.log(this.setState);
  // }


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
  console.log(this.state.nasa);
  console.log(this.state.pic);
  return (
    <>
      <h1>Check IP Address</h1>
      <button onClick={ this.getIp }>Click here for IP!</button>
      <p>IP:{ this.state.ipObject.ip }</p>
      <p>City:{ this.state.ipObject.city }</p>
      <h1>Checkout these daily Galaxy Pics, Check back tomorrow for a new one!</h1>
      {/* <button onClick={ this.getNasa }>Click here G</button> */}
       <p> { this.state.nasa } </p>
      <img src={ this.state.pic } style={{height:"1000px"}} alt='picofDay' />



    </>
    )
  }
}

export default App;
