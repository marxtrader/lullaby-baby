import React, { Component } from 'react';
import locations from './locations'
import Table from './Table';
import Form from './Form';

class EditLocations extends Component {
    state = {
        characters: []
    };

    componentDidMount() { 
      this.setState({
        characters: locations
      })          
    }
    
    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container"> 
            <p>Add / Remove Location</p>
              <h5>Add New</h5>               
              <Form handleSubmit={this.handleSubmit} />
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default EditLocations;