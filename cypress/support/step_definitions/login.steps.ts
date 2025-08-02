// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import { LoginSelectors } from '../../e2e/selectors/login/login_selectors';

// Given('I am on the login page', () => {
//  // cy.visit('/login');
//  cy.visit('https://www.saucedemo.com'); // Ensure the base URL is set correctly in cypress.config.ts
// });

// When('I enter valid credentials', () => {
//   cy.get(LoginSelectors.usernameField).type('standard_user');
//   cy.get(LoginSelectors.passwordField).type('secret_sauce');
//   cy.get(LoginSelectors.loginButton).click();
// });

// Then('I should see the inventory page', () => {
//   cy.url().should('include', '/inventory');
// });

// // Empty username
// When('I login with an empty username and a valid password', () => {
//   cy.get(LoginSelectors.usernameField).clear();
//   cy.get(LoginSelectors.passwordField).type('secret_sauce');
//   cy.get(LoginSelectors.loginButton).click();
// });

// // Empty password
// When('I login with a valid username and an empty password', () => {
//   cy.get(LoginSelectors.usernameField).type('standard_user');
//   cy.get(LoginSelectors.passwordField).clear();
//   cy.get(LoginSelectors.loginButton).click();
// });

// // Invalid credentials
// When('I login with invalid credentials', () => {
//   cy.get(LoginSelectors.usernameField).type('wrong_user');
//   cy.get(LoginSelectors.passwordField).type('wrong_pass');
//   cy.get(LoginSelectors.loginButton).click();
// });

// // Error message assertion
// Then('I should see an error message {string}', (errorMessage: string) => {
//   cy.get(LoginSelectors.errorMessage)
//     .should('be.visible')
//     .and('contain.text', errorMessage);
// });
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('/');
});

When('I enter valid credentials', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
});

Then('I should see the inventory page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.inventory_list').should('be.visible');
});

When('I login with an empty username and a valid password', () => {
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
});

When('I login with a valid username and an empty password', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="login-button"]').click();
});

When('I login with invalid credentials', () => {
  cy.get('[data-test="username"]').type('invalid_user');
  cy.get('[data-test="password"]').type('wrong_password');
  cy.get('[data-test="login-button"]').click();
});

Then('I should see an error message {string}', (errorMessage: string) => {
  cy.get('[data-test="error"]').should('be.visible').and('have.text', errorMessage);
});