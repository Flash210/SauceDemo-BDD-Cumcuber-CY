Feature: Add to Cart

  Scenario: Add item to cart
    Given I am logged in
    When I add an item to the cart
    Then the cart should show 1 item

  Scenario: Add multiple items to cart
    Given I am logged in
    When I add 3 items to the cart
    Then the cart should show 3 items

  Scenario: Remove an item from the cart
    Given I am logged in
    And I have 2 items in the cart
    When I remove 1 item from the cart
    Then the cart should show 1 item

  Scenario: Cart is empty initially
    Given I am logged in
    Then the cart should show 0 items
