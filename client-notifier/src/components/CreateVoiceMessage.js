import React, {Component} from "react"
import TextArea from './TextArea'
import axios from 'axios'
import Radio from './Radio'
//import config from '../../config/config'
let returnMessage = '';

class CreateVoiceMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            description: "",
            message:"",
            type:"Voice",
            language:"English",
            enable:true
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
        name:this.state.name,
        description:this.state.description,
        message:this.state.message,
        type:this.state.type,
        language:this.state.language        
      }
      console.log("Entering handleClick Data Object = ",data)

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post(`http://${config.apiServer.host}/${companyId}`, {
        name: data.Name,
        description : data.description,
        message : data.message,
        type: data.type,
        language:data.language
      })
      .then(function (response) {
        console.log('returned from post')
        const data = JSON.stringify(response.data)

        const content =`<h2>Submission Success</h2><p>Your message has been saved</p>`
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    render() {
        return (
          <div>
            <form className='fact-form'>
              <fieldset>
                <legend> Create a voice message</legend><br />
                  <label>Message Name ex. appt reminder :</label><br />
                  <input 
                      type="text" 
                      value={this.state.name} 
                      name="Name" 
                      placeholder="Message Name" 
                      onChange={this.handleChange} 
                  />

                  <br /><br />
                  <label>Description :</label><br />
                  <input 
                      type="text" 
                      value={this.state.description} 
                      name="Description" 
                      placeholder="Notifies clients of coming appointments" 
                      onChange={this.handleChange} 
                  /><br /><br />

                    <input 
                      required="required" 
                      type="radio"  
                      name="topic" 
                      value="html" 
                      onChange={this.handleChange} 
                    />HTML

                  </label><br /><br />

                  <label>Property or Tag *required</label><br />
                  <input 
                      type="text" 
                      value={this.state.property} 
                      name="language" 
                      placeholder="property or tag" 
                      onChange={this.handleChange} 
                      required = 'required'
                  /><br />
                  <select>
                    <option selected value="Ivy">English</option>
                    <option value="Vitoria">Language</option>
                  </select>

                  <label><h3>Create Message</h3></label>                  
                  <textarea
                    name='message'
                    rows={5}
                    cols = {50}
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder=" care giver want to remind you..."
                    required="required"
                  /><br /><br />
                  
                  <button onClick={this.handleClick} className='submit'>Submit</button>
                  <span className="status">status:{this.state.success}</span>
                </fieldset>
              </form>
          </div>
        )
    }
}

export default CreateVoiceMessageForm;