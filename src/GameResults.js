import React, { Component } from 'react';

class GameResults extends Component {
    render() {
        return (
            <div className="gameContainer">
                { 
                  this.props.videoFile
                    ? <video playsInline loop controls src={this.props.videoFile}></video> 
                    : <img src={this.props.backgroundImage} alt={this.props.gameName}/>
                }
                <h2>{this.props.gameName}</h2>
            </div>
        )
    }
}

export default GameResults;