Feature: Add to Cart
  Scenario: Add item to cart
    Given I am logged in
    When I add an item to the cart
    Then the cart should show 1 item