


import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CartPage } from '../../e2e/pages/add_to_cart.page';
const cartPage = new CartPage();

// Sample product IDs
const products = [
  'sauce-labs-backpack',
  'sauce-labs-bike-light',
  'sauce-labs-bolt-t-shirt',
  'sauce-labs-fleece-jacket',
  'sauce-labs-onesie',
  'test.allthethings()-t-shirt-(red)',
];

Given('I am logged in', () => {
  cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

Given('I have {int} items in the cart', (count: number) => {
  cartPage.clearCart();
  for (let i = 0; i < count; i++) {
    cartPage.addItemToCart(products[i]);
  }
});

When('I add an item to the cart', () => {
  cartPage.addItemToCart(products[0]);
});

When('I add {int} items to the cart', (count: number) => {
  for (let i = 0; i < count; i++) {
    cartPage.addItemToCart(products[i]);
  }
});

When('I remove {int} item(s) from the cart', (count: number) => {
  for (let i = 0; i < count; i++) {
    cartPage.removeItemFromCart(products[i]);
  }
});

Then('the cart should show {int} item(s)', (expectedCount: number) => {
  cartPage.getCartItemCount().then((count) => {
    cy.wrap(count).should('eq', expectedCount);
  });
});
