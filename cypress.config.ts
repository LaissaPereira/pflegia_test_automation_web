import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  e2e: {
    baseUrl: "https://staging.pflegia.de",
    env: {
      BASIC_AUTH_USER: process.env.CYPRESS_BASIC_AUTH_USER,
      BASIC_AUTH_PASS: process.env.CYPRESS_BASIC_AUTH_PASS
    },
    defaultCommandTimeout: 10000, // 10 seconds for commands like cy.get(), cy.click(), etc.
    pageLoadTimeout: 60000,       // 60 seconds for cy.visit() page loads
    requestTimeout: 15000,        // for cy.request()
    responseTimeout: 15000, 
          // for waiting on a response after a request

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
