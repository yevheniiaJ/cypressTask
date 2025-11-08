const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "c2c3nz",
    video: true,
    requestTimeout: 15000,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 60000,
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //supportFile: true,
    specPattern: 'cypress/tests/**/*.cy.js'
  },
});
