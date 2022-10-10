const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kcezqs",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome", // The "reporter" defines who generate the report
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report", // Directory where the reports will be generated
    overwrite: true, // If the old reports will be sobrescribed by the newes reports
    // Defines which pattern will be generate
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss", // Defines the format of the file to be generated
  },
});
