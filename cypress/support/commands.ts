/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('acceptCookies', () => {
    // Adjust the selector to match your app's cookie banner/button
    cy.get('[data-testid="accept-cookies"]')
      .should('be.visible')
      .click();
  });

  Cypress.Commands.add('visitStagingWithAuth', (path = '/') => {
    const user = encodeURIComponent(Cypress.env('BASIC_AUTH_USER'));
    const pass = encodeURIComponent(Cypress.env('BASIC_AUTH_PASS'));
    if (!user || !pass) {
      throw new Error('Basic Auth credentials not found in Cypress.env');
    }
    cy.visit(`https://${user}:${pass}@staging.pflegia.de${path}`);
  });
 
 //Cypress.Commands.add('staging', (user, password) => { 

 /*  const user = Cypress.env('CYPRESS_USER');
  const password = Cypress.env('PASSWORD')

  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();


 }) */
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
declare namespace Cypress {
    interface Chainable {
      acceptCookies(): Chainable<void>;
      visitStagingWithAuth(path?: string): Chainable<void>;
    }
  }
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }