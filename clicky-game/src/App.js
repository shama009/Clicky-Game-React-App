import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    topScoresArray: [0]
  };
  clickPicture = id => {
    const max = Math.max(...this.state.topScoresArray);
    console.log(max);
    this.setState({topScore: max});
    // Arrange the pictures in a random manner
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0 ,
      topScoresArray: this.state.topScoresArray.concat([this.state.topScore]),
    });
      console.log(this.state.topScoresArray, this.state.topScore);
    }
    else {
      // if (this.state.score >= this.state.topScore) {
      //   this.setState({ topScore: this.state.score });
      // }
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      });
      //this.setState({ score: this.state.score + 1 });
      //this.setState({topScore: this.state.topScore + 1});
      //console.log(this.state.clickedArray, this.state.score, this.state.topScore);
    }
    // const cardsClicked = this.state.cards.filter(picture => picture.id === id);
    //console.log(this.state.clickedArray, this.state.score, this.state.topScore);

    // Set this.state.cards equal to the new friends array
    //this.setState({ cards });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Clicky Game!!</h1>
        </header>
        <p className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!  Score: {this.state.score} | TopScore: {this.state.topScore}</strong>
        </p>
        <Wrapper>
          {this.state.cards.map(picture => (
            <PictureCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} // to get rid of unique key prop warning
              name={picture.name}
              image={picture.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
