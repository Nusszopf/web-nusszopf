// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
  cy.get('[data-test="btn_burger_nav-header"]').click()
  cy.get('[data-test="btn_login_nav-header"]').click()
  cy.get('[name="emailOrName"]').first().type('e2etest')
  cy.get('[name="password"]').first().type('asdf1234A!')
  cy.get('[type="submit"]').first().click()
})
Cypress.Commands.add('logout', () => {
  cy.get('[data-test="btn_burger_nav-header"]').click()
  cy.get('[data-test="btn_logout_nav-header"]').click()
})
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
