import React, {Component} from "react"
import { CheckBox } from 'react-native-elements'
import Button from 'react-bootstrap
//import TextArea from './TextArea'
import axios from 'axios'
import Radio from './Radio'
import config from '../config'
import "./CareGiver.css";

export default class CareGivers extends Component {
    constructor() {
        super()
        this.state = {
            companyId:"",
            prefix:"Dr."
            firstName: "", // name of the care giver
            lastName: "", // name of the care giver
            description:"",
            enabled:true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    validateForm() {
      return this.state.firstName.length > 0 && this.state.lastName.length > 0 
    }

    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value })
    }

    handleSubmit(event) {
      event.preventDefault();
      let data = {
        companyId:this.state.companyId,
        prefix: this.state.prefix,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        description:this.state.description,
        enabled:this.state.enabled      
      }

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post(`http://${config.apiServer.host}/caregivers`, {
        companyId:data.companyId,
        prefix:data.prefix
        firstName: data.lastName,
        lastName: data.lastName,
        description : data.description,
        enabled: data.enabled
      })
      .then(function (response) {
        console.log('returned from post')
        const data = JSON.stringify(response.data)
        console.log(data)
        // data is an array of objects.
        // const content =`<h2>Submission Success</h2><p>Your contribution has been queued for inclusion.</p>`
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    render() {
        return (
          <div>
            <form className='CareGivers'>
              <fieldset>
                <legend> Enter Care Givers</legend><br />
                <label>Prefix :</label><br />
                  <input 
                      type="text" 
                      value={this.state.prefix} 
                      name="prefix" 
                      placeholder="Dr." 
                      onChange={this.handleChange} 
                  />
                  <br /><br />
                  <label>First Name :</label><br />
                  <input 
                      type="text" 
                      value={this.state.firstName} 
                      name="firstName" 
                      placeholder="First Name" 
                      onChange={this.handleChange} 
                  />
                  <br /><br />
                  <label>Last Name :</label><br />
                  <input 
                      type="text" 
                      value={this.state.lastName} 
                      name="lastName" 
                      placeholder="Last Name" 
                      onChange={this.handleChange} 
                  />
                  <br /><br />
                  <Button 
                    onClick={this.handleSubmit} 
                    className='submit'>Submit
                  </Button>
                </fieldset>
              </form>
              data.map((caregiver, i) => {
            <MenuItem eventKey=[i]>caregiver.firstName[i]</MenuItem>)
            <CheckBox
              center
              title='Click Here to Remove This Item'
              iconRight
              iconType='material'
              checkedIcon='clear'
              uncheckedIcon='add'
              checkedColor='red'
              checked={this.state.checked}
            />}

          </div>
        )
    }
}
