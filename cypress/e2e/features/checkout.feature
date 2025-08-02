Feature: Checkout
  Scenario: Complete checkout
    Given I have items in the cart
    When I proceed to checkout
    Then I should see the order confirmation