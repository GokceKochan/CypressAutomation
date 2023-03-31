const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hideXHR:true,
  //projectId: 'z7zzsa',
  e2e: {
   // baseUrl;'https://demoqa.com/ '
   watchForFileChanges: false,
   video: false,
   defaultCommandTimeout: 40000  ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // specPattern: 'cypress/integration/examples/*.js'
  },
  env:{
    userName:"omer"
  }

  

});
