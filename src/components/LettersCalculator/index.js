import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    letterCount: 0,
  }

  onEnterWords = event => {
    const {searchInput} = this.state
    this.setState({
      searchInput: event.target.value,
      letterCount: searchInput.length + 1,
    })
  }

  render() {
    const {searchInput, letterCount} = this.state
    // console.log(searchInput.length)

    return (
      <div className="main-container">
        <div className="left-container">
          <h1 className="heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label htmlFor="input-element" className="desc">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onEnterWords}
            id="input-element"
          />
          <p className="button" type="button">
            No.of letters: {letterCount}
          </p>
        </div>
        <div className="right-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
