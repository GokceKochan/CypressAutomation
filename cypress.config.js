const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z7zzsa',
  e2e: {
   // baseUrl;'https://demoqa.com/ '
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // specPattern: 'cypress/integration/examples/*.js'
  },
});
