const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here      
    },
    baseUrl: 'https://juice-shop.guardrails.ai',
    defaultCommandTimeout: 10000,
  },
  
});
