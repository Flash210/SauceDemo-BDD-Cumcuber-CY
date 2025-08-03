export class InventoryPage {
  visit() {
      cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
    //cy.visit('/inventory');
  }

  selectFilter(option: string) {
    //cy.get('[data-test="product_sort_container"]').select(option); // Update selector if needed
    cy.get('[data-test="product-sort-container"]').select(option);

  }

  getInventoryItems() {
    return cy.get('.inventory_item');
  }

  getItemPrices() {
    return cy.get('.inventory_item_price');
  }

  getItemNames() {
    return cy.get('.inventory_item_name');
  }

  getFilterDropdown() {
    return cy.get('[data-test="product_sort_container"]');
  }

  getNoItemsMessage() {
    return cy.get('.no-items-message'); // Adjust selector if needed
  }


   verifySelectedFilterOption(expectedOption: string): void {
        const expectedValues: Record<string, string> = {
            'Name (A to Z)': 'az',
            'Name (Z to A)': 'za',
            'Price (low to high)': 'lohi',
            'Price (high to low)': 'hilo'
        };

        const expectedValue = expectedValues[expectedOption];
        cy.get(".product_sort_container").should('have.value', expectedValue);
    }

}
