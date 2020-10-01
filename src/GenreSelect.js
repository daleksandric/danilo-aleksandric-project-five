import React, { Component } from 'react';

class GenreSelect extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            userSelection: event.target.value,
        })
        this.props.filterGameGenre(event.target.value)
    }
    render() {
        return (
            <div className="dropdownMenu">
                <label>Pick a genre, and get inspiration: </label>
                <select 
                    value={this.state.userSelection} 
                    onChange={this.handleChange}
                >
                    <option value="">Choose a Genre!</option>
                    <option value="action">Action</option>
                    <option value="casual">Casual</option>
                    <option value="sports">Sports</option>
                    <option value="massively-multiplayer">Massively Multiplayer</option>
                    <option value="role-playing-games-rpg">RPG</option>
                    <option value="strategy">Strategy</option>
                    <option value="indie">Indie</option>
                </select>
            </div>
        )
    }
}

export default GenreSelect;