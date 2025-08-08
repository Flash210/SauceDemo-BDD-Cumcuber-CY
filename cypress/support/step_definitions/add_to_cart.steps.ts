import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CartPage } from "../../e2e/pages/add_to_cart.page";

const cartPage = new CartPage();

let addedItemName: string;
let addedItemPrice: string;
let addedItems: { name: string; price: string }[] = [];

/* 🔹 Used in all scenarios */
Given("I am logged in", () => {
  cy.visit("/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

/* 🔹 Scenario: Add multiple items to cart */
/* 🔹 Scenario: Remove an item from the cart */
Given("I have {int} items in the cart", (count: number) => {
  cartPage.clearCart();

  cy.get(".inventory_item").each(($item, index) => {
    if (index! < count) {
      cy.wrap($item).find('button[id^="add-to-cart"]').click();
    }
  });

  // Alternative method:
  // for (let i = 0; i < count; i++) {
  //   cy.get('.inventory_item')
  //     .eq(i)
  //     .find('button[id^="add-to-cart"]')
  //     .click();
  // }
});

/* 🔹 Scenario: Add item to cart */
When("I add an item to the cart", () => {
  cy.get(".inventory_item")
    .first()
    .within(() => {
      cy.get(".inventory_item_name")
        .invoke("text")
        .then((text) => {
          addedItemName = text.trim();
        });
      cy.get(".inventory_item_price")
        .invoke("text")
        .then((price) => {
          addedItemPrice = price.trim();
        });
      cy.get('button[id^="add-to-cart"]').click();
    });
  cy.get(".shopping_cart_container").click(); // open cart
});

Then("cart icon should show 1 item", () => {
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

Then("the item should be in the cart with correct details", () => {
  cy.get(".cart_item")
    .first()
    .within(() => {
      cy.get(".inventory_item_name").should("have.text", addedItemName);
      cy.get(".inventory_item_price").should("have.text", addedItemPrice);
    });
});

/* 🔹 Add multiple items to cart */
When("I add {int} items to the cart", (count: number) => {
  addedItems = []; // reset before adding

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
                  addedItems.push({ name, price });
                });
            });

          cy.get('button[id^="add-to-cart"]').click();
        });
      }
    });

  // Open the cart after adding items
  cy.get(".shopping_cart_container").click();
});

/* 🔹 Check cart icon shows correct badge count */
Then("cart icon should show {int} items", (expectedCount: number) => {
  cy.get(".shopping_cart_badge").should("have.text", expectedCount.toString());
});

/* 🔹 Validate all items have correct name and price */
Then("the items should be in the cart with correct details", () => {
  cy.get(".cart_item").each(($el, index) => {
    const expected = addedItems[index!];

    cy.wrap($el).within(() => {
      cy.get(".inventory_item_name").should("have.text", expected.name);
      cy.get(".inventory_item_price").should("have.text", expected.price);
    });
  });
});

/* 🔹 Scenario: Remove an item from the cart */
When("I remove {int} item(s) from the cart", (count: number) => {
  cy.get('button[id^="remove"]').then(($buttons) => {
    for (let i = 0; i < count && i < $buttons.length; i++) {
      cy.wrap($buttons[i]).click();
    }
  });
});

/* 🔹 Used in all scenarios */
Then("the cart should show {int} item(s)", (expectedCount: number) => {
  cartPage.getCartItemCount().then((count) => {
    cy.wrap(count).should("eq", expectedCount);
  });
});

