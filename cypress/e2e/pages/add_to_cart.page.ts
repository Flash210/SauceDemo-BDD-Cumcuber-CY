
import { CartLocators } from '../locators/cart.locators';

export class CartPage {

  addItemToCart(productId: string) {
    cy.get(CartLocators.addToCartButton(productId)).click();
  }

  removeItemFromCart(productId: string) {
    cy.get(CartLocators.removeFromCartButton(productId)).click();
  }

  openCart() {
    cy.get(CartLocators.cartIcon).click();
  }

  clearCart() {
    cy.get('body').then(($body) => {
      if ($body.find(CartLocators.cartItemCount).length > 0) {
        cy.get(CartLocators.cartItemCount).invoke('text').then((countText) => {
          const count = Number(countText);
          if (count > 0) {
            const products = [
              'sauce-labs-backpack',
              'sauce-labs-bike-light',
              'sauce-labs-bolt-t-shirt',
              'sauce-labs-fleece-jacket',
              'sauce-labs-onesie',
              'test.allthethings()-t-shirt-(red)',
            ];
            products.forEach((product) => {
              cy.get('body').then(($bodyInner) => {
                if ($bodyInner.find(CartLocators.removeFromCartButton(product)).length > 0) {
                  this.removeItemFromCart(product);
                }
              });
            });
          }
        });
      }
    });
  }

  getCartItemCount() {
    return cy.get('body').then(($body) => {
      if ($body.find(CartLocators.cartItemCount).length > 0) {
        return cy.get(CartLocators.cartItemCount).invoke('text').then((text) => Number(text));
      }
      return 0;
    });
  }
}
