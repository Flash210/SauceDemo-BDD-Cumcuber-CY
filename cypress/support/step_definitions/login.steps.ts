

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../e2e/pages/login.page';
const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the inventory page', () => {
  loginPage.assertInventoryPageVisible();
});

When('I login with an empty username and a valid password', () => {
  loginPage.enterUsername('');
  loginPage.enterPassword('secret_sauce');
  loginPage.clickLogin();
});

When('I login with a valid username and an empty password', () => {
  loginPage.enterUsername('standard_user');
  loginPage.enterPassword('');
  loginPage.clickLogin();
});

When('I login with invalid credentials', () => {
  loginPage.login('invalid_user', 'wrong_password');
});

Then('I should see an error message {string}', (errorMessage: string) => {
  loginPage.assertErrorMessage(errorMessage);
});