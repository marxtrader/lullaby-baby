let company = {
  id:'123456',
  name:'Doggy Day Care',
  address:{
    street:'1 Main Street',
    street1:'Suite 402',
    city:'New City',
    state:'New York',
    zip:'10956'
  },
  phone:18455551111,
  caregivers:[
    {
      firstName:"Sam",
      lastName:"Snead",
      prefix:"Dr.",
      description:"Ears",
      enabled:true
    },
    {
      firstName:"Joyce",
      lastName:"Vance",
      prefix:"Dr.",
      description:"Eyes",
      enabled:true
    },
    {
      firstName:"Richard",
      lastName:"Painter",
      prefix:"Dr.",
      description:"Throat",
      enabled:true
    },
    {
      firstName:"Dotty",
      lastName:"Dash",
      prefix:"Dr.",
      description:"CBD's",
      enabled:true
    }
  ],
  locations:[
    {
      id:"1",
      street:'1 Main Street',
      street1:'Room 2014',
      city:"New City",
      state:"New York",
      zip:'10956',
      phone:'18455551212'
    },
    {
      id:"2",
      street:'1 Elm Street',
      street1:'Room 201',
      city:"New City",
      state:"New York",
      zip:'10956',
      phone:'18455551213'
    },
    {
      id:"3",
      street:'1 Maple Street',
      street1:'Room 20',
      city:"Pomona",
      state:"New York",
      zip:'10970',
      phone:'18455551214'
    }
  ],
  timezone:'Eastern',
  contact:'Boris Karloff',
  email:'boriskarloff@gmail.com'
}
module.exports = company;
