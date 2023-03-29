// Write your code here

import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  numberRandom = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.numberRandom()
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const randomNumber = count <= 100 ? count : null

    return (
      <div className="container">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button className="button" type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p>{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
