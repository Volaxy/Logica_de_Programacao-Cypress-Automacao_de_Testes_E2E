const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kcezqs",
  e2e: {
    setupNodeEvents(on, config) {
    },
    // This line creates a variable with the value of the URL to be referenced in each test file through the "/"
    "baseUrl": "https://alura-fotos.herokuapp.com"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss",
  },
});
