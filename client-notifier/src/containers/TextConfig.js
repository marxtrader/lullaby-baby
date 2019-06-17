import React, {Component} from "react"
//import { HelpBlock, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import axios from 'axios'
import config from '../config'
import "./TextConfig.css";

let max_length=140 // maximum allowed characters in a text message

class TextConfig extends Component {
    constructor() {
        super()
        this.state = {
          // collect the attributes of the text message.
          companyId:"",
          name: "", 
          description:"",
          type:'text',
          message:"" 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value })
    }

    validateForm() {
      return this.state.name.length > 0 && this.state.message.length < max_length;
    }

    handleClick(event) {
      event.preventDefault();
      let data = {
        companyId:'companyId',
        name:this.state.name,
        description:this.state.description,
        type:this.state.type,
        message:this.state.message       
      }

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post(`http://${config.apiServer.host}/`, {
        companyId:'companyId', 
        name: data.name,
        description : data.description,
        type: data.type,
        message : data.message
      })
      .then(function (response) {
        console.log('returned from post')
        const data = JSON.stringify(response.data)
        console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    render() {
        return (
          <div>
            <form className='TextConfig' onSubmit={this.handleClick}>
              <fieldset>
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
                  <label><h4>Create the text message</h4></label>   
                  <br /><br />                                 
                  <textarea
                    name='message'
                    rows={3}
                    cols = {50}
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="ex. {caregiver} wants to remind you of your appointment on {date} at {time} at {location}. Please text back yes to confirm and no to cancel"
                    required="required"
                  /><p>Characters Remaining:{max_length-this.state.message.length}</p><br />
                  
                  {/* <button onClick={this.handleClick} className='submit'>Submit</button> */}
                  <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Submit"
                    loadingText="Saving…"
                  />
                </fieldset>
              </form>
          </div>
        )
    }
}

export default TextConfig;