/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { InventoryPage } from '../../e2e/pages/inventory_page'; 
import { assert } from 'chai';

const inventoryPage = new InventoryPage();

Given('I am on the inventory page', () => {
    
  inventoryPage.visit();
});

When('I filter by {string}', (filterOption: string) => {
  inventoryPage.selectFilter(filterOption);
});

Then('the first item should be the cheapest', () => {
  inventoryPage.getItemPrices().then(($prices) => {
    const priceValues = [...$prices].map((price) =>
      parseFloat(price.textContent!.replace('$', ''))
    );
    assert.equal(priceValues[0], Math.min(...priceValues), 'First item is the cheapest');
  });
});

Then('the last item should be the most expensive', () => {
  inventoryPage.getItemPrices().then(($prices) => {
    const priceValues = [...$prices].map((price) =>
      parseFloat(price.textContent!.replace('$', ''))
    );
    assert.equal(
      priceValues[priceValues.length - 1],
      Math.max(...priceValues),
      'Last item is the most expensive'
    );
  });
});

Then('the first item should be the most expensive', () => {
  inventoryPage.getItemPrices().then(($prices) => {
    const priceValues = [...$prices].map((price) =>
      parseFloat(price.textContent!.replace('$', ''))
    );
    assert.equal(priceValues[0], Math.max(...priceValues), 'First item is the most expensive');
  });
});

Then('the last item should be the cheapest', () => {
  inventoryPage.getItemPrices().then(($prices) => {
    const priceValues = [...$prices].map((price) =>
      parseFloat(price.textContent!.replace('$', ''))
    );
    assert.equal(
      priceValues[priceValues.length - 1],
      Math.min(...priceValues),
      'Last item is the cheapest'
    );
  });
});

Then('the first item name should start alphabetically earliest', () => {
  inventoryPage.getItemNames().then(($names) => {
    const nameValues = [...$names].map((name) => name.textContent!.trim());
    const sortedNames = [...nameValues].sort();
    assert.equal(nameValues[0], sortedNames[0], 'First item is alphabetically earliest');
  });
});

Then('the last item name should start alphabetically latest', () => {
  inventoryPage.getItemNames().then(($names) => {
    const nameValues = [...$names].map((name) => name.textContent!.trim());
    const sortedNames = [...nameValues].sort();
    assert.equal(
      nameValues[nameValues.length - 1],
      sortedNames[sortedNames.length - 1],
      'Last item is alphabetically latest'
    );
  });
});

Then('I should see a {string} message', (message: string) => {
  inventoryPage.getNoItemsMessage().should('contain.text', message);
});

Then('I should see the following options: {string}', (optionsString: string) => {
  // const expectedOptions = optionsString.split(',').map(opt => opt.trim());
  // inventoryPage.getFilterDropdown().find('option').then(($options) => {
  //   const actualOptions = [...$options].map(opt => opt.textContent?.trim());
  //   assert.deepEqual(actualOptions, expectedOptions, 'Dropdown options match expected');
  // });
  //  const expectedOptions = optionsString.split(',').map(opt => opt.trim());

  // inventoryPage.getFilterDropdown()
  //   .find('option')
  //   .each((option, index) => {
  //     cy.wrap(option).should('have.text', expectedOptions[index]);
  //   });

  inventoryPage.verifySelectedFilterOption(optionsString);
});
