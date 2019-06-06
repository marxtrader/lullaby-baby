'use strict';
var Alexa = require("alexa-sdk");
var constants = require('./constants/constants')
var getFact = require('./functions/getFact')
var listSongs =require('./functions/listSongs')

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);

  alexa.appId = constants.appId;
  alexa.dynamoDBTableName = constants.dynamoDBTableName;

  // Register State handlers
  alexa.registerHandlers(handlers);

  alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('FactIntent');
    },

    'LullabyIntent': function () {
      

      // get a random fact and return it to alexa.
      // console.log("step1")
      // var songs = listSongs()
      // console.log("step2")

      //   console.log(fact)
        this.response.speak('Should be hearing a fact')
        .cardRenderer('Success', 'Should be hearing a fact');
        this.emit(':responseReady');

      
    },
    'MyNameIsIntent': function () {
        this.emit('SayHelloName');
    },
    'SayHelloName': function () {
        var name = this.event.request.intent.slots.name.value;
        this.response.speak('Hello ' + name)
            .cardRenderer('hello world', 'hello ' + name);
        this.emit(':responseReady');
    },
    'SessionEndedRequest' : function() {
      var self=this;
        console.log('Session ended with reason: ' + this.event.request.reason);
        self.response.speak('Should be hearing a fact')
        .cardRenderer('Success', 'Should be hearing a fact');
        self.emit(':responseReady');
    },
    'AMAZON.StopIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function() {
        this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
            " name is awesome Aaron'");
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    'Unhandled' : function() {
        this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
            " or 'alexa, ask hello world my name is awesome Aaron'");
    }
};
