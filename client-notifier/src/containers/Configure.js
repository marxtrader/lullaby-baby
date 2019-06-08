import React, {Component} from "react"
import TextArea from './TextArea'
import axios from 'axios'
import Radio from './Radio'
import config from '../config'
let returnMessage = '';

class Configure extends Component {
    constructor() {
        super()
        this.state = {
            name: "", // name of the message
            description:"",
            type:null,
            message:"" // template string
            //selectedOption: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value })
    }

    handleClick(event) {
      event.preventDefault();
      let data = {
        name:this.state.name,
        description:this.state.description,
        type:this.state.type,
        message:this.state.message       
      }
      console.log("Entering handleClick Data Object = ",data)

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post(`http://${config.apiServer.host}/`, {
        name: data.name,
        description : data.description,
        type: data.type,
        message : data.message
      })
      .then(function (response) {
        console.log('returned from post')
        const data = JSON.stringify(response.data)

        const content =`<h2>Submission Success</h2><p>Your contribution has been queued for inclusion.</p>`
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    render() {
        return (
          <div>
            <form className='message-cofig'>
              <fieldset>
                <legend> Create Message</legend><br />
                  <label>Message Name :</label><br />
                  <input 
                      type="text" 
                      value={this.state.name} 
                      name="name" 
                      placeholder="A name for your broadcast" 
                      onChange={this.handleChange} 
                  />
                  <br /><br />
                  <label>Add a Description :</label><br />
                  <input 
                      type="text" 
                      value={this.state.description} 
                      name="description" 
                      placeholder="description" 
                      onChange={this.handleChange} 
                  />
                  <br /><br />
                  <label>Choose message type: </label>  <br />
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="voice">Voice</option>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                  </select>
                
                  <br /><br />
                  <label><h3>Create the message text</h3></label>   
                  <br /><br />               
                  <textarea
                    name='message'
                    rows={5}
                    cols = {50}
                    value={this.state.textarea}
                    onChange={this.handleChange}
                    placeholder="ex. {care giver} wants to remind you of your appointment on {day} at {time}."
                    required="required"
                  /><br /><br />
                  
                  <button onClick={this.handleClick} className='submit'>Submit</button>
                  
                </fieldset>
              </form>
          </div>
        )
    }
}

export default Configure;