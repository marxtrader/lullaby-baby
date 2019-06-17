import React, {Component} from 'react';
let Id ='10001'
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id:'',
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { id, name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Specialty</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} />
                {/* <input 
                    type="text" 
                    name="location" 
                    value={location} 
                    onChange={this.handleChange} /> */}
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
