import React, { Component } from "react";
import Locations as '../components/locations'
import Caregivers as '../components/CareGivers'
import appointments as '../mockData/appointments'
import Results as '../components/Results'

//const result = locations.map(location => console.log(location))
console.log(company.caregivers)

export default Dashboard = () => {

    return (
      <div>
        <Results />
        <Locations />
        <CareGivers />
      </div>
    )

} //end class