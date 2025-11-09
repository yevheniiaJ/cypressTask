const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries:2,
    projectId: "4g6jed",
    video: true,
    requestTimeout: 15000,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 75000,
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //supportFile: true,
    specPattern: 'cypress/tests/**/*.cy.js'
  },
});
