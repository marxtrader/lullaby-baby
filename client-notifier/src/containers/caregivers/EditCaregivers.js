import React, { Component } from 'react';
import caregivers from './caregivers'
import Table from './Table';
import Form from './Form';

class EditCaregivers extends Component {
    state = {
        characters: []
    };

    componentDidMount() { 
      this.setState({
        characters: caregivers
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
            <p>Add / Remove Caretaker</p>
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

export default EditCaregivers;