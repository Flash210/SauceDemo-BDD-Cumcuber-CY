
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