import { CartLocators } from "../locators/cart.locators";

export class CartPage {
  addedItems: { name: string; price: string }[] = [];
  addedItemName: string = "";
  addedItemPrice: string = "";



  addItemToCart(itemIndex: number) {

    cy.get(".inventory_item")
    .first()
    .within(() => {
      cy.get(".inventory_item_name")
        .invoke("text")
        .then((text) => {
          this.addedItemName = text.trim();
        });
      cy.get(".inventory_item_price")
        .invoke("text")
        .then((price) => {
          this.addedItemPrice = price.trim();
        });
      cy.get('button[id^="add-to-cart"]').click();
    });
  cy.get(".shopping_cart_container").click(); // open cart
  }



  shoudlShowCartItemCount() {
    cy.get(".cart_item")
    .first()
    .within(() => {
      cy.get(".inventory_item_name").should("have.text", this.addedItemName);
      cy.get(".inventory_item_price").should("have.text", this.addedItemPrice);
    });
  }



addMultipleItemsToCart(count: number) {
  this.addedItems = []; // reset before adding

  cy.get(".inventory_list")
    .find(".inventory_item")
    .should("have.length.at.least", count)
    .then(($items) => {
      for (let i = 0; i < count; i++) {
        cy.wrap($items[i]).within(() => {
          cy.get(".inventory_item_name")
            .invoke("text")
            .then((nameText) => {
              const name = nameText.trim();

              cy.get(".inventory_item_price")
                .invoke("text")
                .then((priceText) => {
                  const price = priceText.trim();
               this.   addedItems.push({ name, price });
                });
            });

          cy.get('button[id^="add-to-cart"]').click();
        });
      }
    });

  // Open the cart after adding items
  cy.get(".shopping_cart_container").click();
}



validateAlltemsDetails() {

  cy.get(".cart_item").each(($el, index) => {
    const expected = this.addedItems[index!];

    cy.wrap($el).within(() => {
      cy.get(".inventory_item_name").should("have.text", expected.name);
      cy.get(".inventory_item_price").should("have.text", expected.price);
    });
  });
}




  
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
