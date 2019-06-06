import React, {Component} from "react"
import TextArea from './TextArea'
import axios from 'axios'
import Radio from './Radio'
import config from '../../config/config'
let returnMessage = '';

class Configure extends Component {
    constructor() {
        super()
        this.state = {
            messageName: "", // name of the message
            voice: true,  // voice?
            text: true,  // text?
            email: true,  // email?
            message:"" // template string
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      const {name, value, type} = event.target
      type === "radio" ? this.setState({ [name]: value }) : this.setState({ [name]: value })
    }

    handleClick(event) {
      event.preventDefault();
      let data = {
        messageName:this.state.messageName,
        operation:this.state.operation,
        message:this.state.message       
      }
      console.log("Entering handleClick Data Object = ",data)

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post(`http://${config.apiServer.host}/`, {
        messageName: data.messageName,
        operation : data.operation,
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
                      value={this.state.messageName} 
                      name="messageName" 
                      placeholder="First Name" 
                      onChange={this.handleChange} 
                  />

                  <br /><br />
                  <input 
                      type="checkbox" 
                      value={this.state.voice} 
                      name="voice" 
                      placeholder="Voice" 
                      onChange={this.handleChange} 
                  />
                  <label>Voice : </label>

                  <input 
                      type="checkbox" 
                      value={this.state.text} 
                      name="text" 
                      placeholder="Text" 
                      onChange={this.handleChange} 
                  />
                  <label>Text : </label>
                  
                  <input 
                      type="checkbox" 
                      value={this.state.email} 
                      name="email" 
                      placeholder="Email" 
                      onChange={this.handleChange} 
                  /> 
                  <label>Email : </label>
                  <br /><br />                  

                  <label><h3>Create the message text</h3></label>                  
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