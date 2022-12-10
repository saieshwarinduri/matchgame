import {Component} from 'react'

import TabList from '../TabList'

import ImageList from '../ImageList'

import './index.css'

class GameFront extends Component {
  state = {
    play: true,
    score: 0,
    timer: 60,
    lableId: 'FRUIT',
    matchObject: {
      id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
      category: 'FRUIT',
    },
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.decrementTime, 1000)
  }

  clearTimeInterval = () => clearInterval(this.timerId)

  decrementTime = () => {
    const {timer} = this.state
    if (timer === 0) {
      clearInterval(this.timerId)
      this.setState({play: false})
    } else {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    }
  }

  createObject = () => {
    const {imagesList} = this.props
    const index = Math.floor(Math.random() * imagesList.length)
    return imagesList[index]
  }

  setlabesState = tabId => {
    this.setState({lableId: tabId})
  }

  changeImagestate = id => {
    const {matchObject} = this.state

    if (matchObject.id === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchObject: this.createObject(),
      }))
    } else {
      this.setState({
        play: false,
      })
      this.clearTimeInterval()
    }
  }

  resetGame = () => {
    this.setState({
      play: true,
      score: 0,
      timer: 60,
      lableId: 'FRUIT',
      matchObject: {
        id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
        category: 'FRUIT',
      },
    })
    this.componentDidMount()
  }

  render() {
    const {matchObject, score, play, timer, lableId} = this.state
    const {tabsList, imagesList} = this.props

    const filteredList = imagesList.filter(each => each.category === lableId)

    return (
      <div className="maincontainer">
        <nav className="navBar">
          <img
            className="LogoofSite"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="scoreContainer">
            <li className="scoreCountcontainer">
              <p className="score">Score:</p>
              <p className="Scorecount">{score}</p>
            </li>

            <li className="timerContainer">
              <img
                className="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="timerSec">{timer} sec</p>
            </li>
          </ul>
        </nav>
        <div className="contentContainer">
          {play && (
            <div className="container">
              <img
                className="mainImage"
                src={matchObject.imageUrl}
                alt="match"
              />
              <ul className="TablistContainer">
                {tabsList.map(each => (
                  <TabList
                    eachList={each}
                    lableId={lableId}
                    setlabesState={this.setlabesState}
                    key={each.tabId}
                  />
                ))}
              </ul>
              <ul className="listcontainerOfImages">
                {filteredList.map(each => (
                  <ImageList
                    listItem={each}
                    changeImagestate={this.changeImagestate}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          )}
          {!play && (
            <div className="resultContainer">
              <img
                className="thropy"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
              />
              <p className="yourScore">YOUR SCORE</p>
              <p className="resultScore">{score}</p>
              <button
                type="button"
                className="playAgain"
                onClick={this.resetGame}
              >
                <img
                  className="resetImage"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                />
                <p className="PlayAgain">PLAY AGAIN</p>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GameFront
