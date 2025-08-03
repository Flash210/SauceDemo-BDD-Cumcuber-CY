/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../e2e/pages/login_page';
const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.login('standard_user', 'secret_sauce'); // Use valid credentials
});

Then('I should see the inventory page', () => {
  loginPage.assertInventoryPageVisible();
});

When('I login with an empty username and a valid password', () => {
  loginPage.login('', 'secret_sauce'); // Empty username
});

Then('I should see an error message {string}', (expectedMessage: string) => {
  loginPage.assertErrorMessage(expectedMessage);
});

When('I login with a valid username and an empty password', () => {
  loginPage.login('standard_user', ''); // Empty password
});

When('I login with invalid credentials', () => {
  loginPage.login('invalid_user', 'invalid_password'); // Invalid credentials
});
