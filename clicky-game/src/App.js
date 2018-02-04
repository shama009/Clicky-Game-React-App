import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      cards
    };

    shufflePicture = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ friends });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Clicky Game!!</h1>
        </header>
        <p className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong>
        </p>
        <Wrapper>
        {this.state.cards.map(picture => (
          <PictureCard
            shufflePicture={this.shufflePicture}
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
