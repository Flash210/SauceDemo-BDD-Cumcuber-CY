import { CartLocators } from "../locators/cart.locators";

export class CartPage {
  clearCart() {
    cy.get("body").then(($body) => {
      if ($body.find(CartLocators.cartItemCount).length > 0) {
        cy.get(CartLocators.cartItemCount)
          .invoke("text")
          .then((countText) => {
            const count = Number(countText);
            if (count > 0) {
              cy.get(CartLocators.allRemoveButtons).click({ multiple: true });
            }
          });
      }
    });
  }

  getCartItemCount() {
    return cy.get("body").then(($body) => {
      if ($body.find(CartLocators.cartItemCount).length > 0) {
        return cy
          .get(CartLocators.cartItemCount)
          .invoke("text")
          .then((text) => Number(text));
      }
      return 0;
    });
  }

  openCart() {
    cy.get(CartLocators.cartIcon).click();
  }

  addItemToCartByIndex(index: number) {
    cy.get(CartLocators.inventoryList)
      .find(CartLocators.inventoryItem)
      .eq(index)
      .within(() => {
        cy.get('button[id^="add-to-cart"]').click();
      });
  }
}
