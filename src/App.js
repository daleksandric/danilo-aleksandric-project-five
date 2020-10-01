import React, { Component } from 'react';
import './App.css';
import GenreSelect from './GenreSelect.js';
import GameResults from './GameResults.js'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gamesList: [],
      isLoading: false,
      userSelection: ''
    }
  }

  ShuffleGames = (games) => {
    let currentIndex = games.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = games[currentIndex];
      games[currentIndex] = games[randomIndex];
      games[randomIndex] = temporaryValue;
    }
    return games.slice(0, 9);
  }  

  filterGameGenre = (userSelection) => {
    this.setState ({
      userSelection: userSelection,
      isLoading: true
    })

    axios({
      url: 'https://api.rawg.io/api/games',
      method: 'GET',
      dataResponse: 'JSON',
      params: {
        genres: userSelection,
      }
    }).then(response => {
      console.log(response.data.results);
      this.setState({
        gamesList: this.ShuffleGames(response.data.results),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Can't find a game to play?</h1>
        <GenreSelect filterGameGenre = {this.filterGameGenre} />
        <div className="gameResultsContainer wrapper">
        { this.state.isLoading ? <p>Loading your games.</p> : this.state.gamesList.map(game => {
          return (
            <GameResults key={game.id} gameName={game.name} videoFile={game?.clip?.clips[640]} backgroundImage={game.background_image}/>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
