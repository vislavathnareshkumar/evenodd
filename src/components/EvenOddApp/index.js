import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {random: 0}

  increament = () => {
    this.setState(prevState => ({
      random: prevState.random + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {random} = this.state
    let para
    if (random % 2 === 0) {
      para = 'Even'
    } else {
      para = 'Odd'
    }
    return (
      <div className="main-container">
        <div className="small-container">
          <h1 className="heading">Count {random}</h1>
          <p className="para">Count is {para} </p>
          <button className="button" onClick={this.increament}>
            Increment
          </button>
          <p className="para1">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

/*
.main-container {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.small-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 90%;

  box-sizing: 5px;

  padding: 50px;
  background: linear-gradient(to bottom, #ff6e7f, #bfe9ff);
}
*/
