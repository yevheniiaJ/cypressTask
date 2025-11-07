const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //supportFile: true,
    specPattern: 'cypress/tests/**/*.cy.js'
  },
});
