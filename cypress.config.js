const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4ueut7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.demoblaze.com/",
  },
});
