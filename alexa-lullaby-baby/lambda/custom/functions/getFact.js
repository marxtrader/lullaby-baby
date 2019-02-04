
const axios = require('axios')

const getFact = function() {

  // first we need to know how many records exist in the database.
  const recCount=0;
  console.log("step3")
  axios.get('http://api.voiceassisttech.com/facts')
    .then(function(response) {
      recCount = JSON.stringify(response.data)
      console.log("record count", recCount)
    })
    .catch(function (error) {
      console.log(error);
    });

  // get a random number within the size of our dataset
  const id = Math.floor(Math.random() * Math.floor(recCount));

  console.log("step4 id = ",id)
  // get the fact from the api server
  axios.get(`http://api.voiceassisttech.com/facts`)
  // response should contain a json object with the topic property and the fact.
  // data = {propterty:'body tag', fact:'description'}
  .then(function (response) {
    const data = JSON.stringify(response.data)

    // now we can create the alexa response and return it to the FactIntent
    return(`${data.property} ${data.fact}`)
  })
  .catch(function (error) {
    console.log(error);
  });

}
module.exports= getFact;