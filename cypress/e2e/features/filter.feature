Feature: Filter
  Scenario: Filter by price (low to high)
    Given I am on the inventory page
    When I filter by "Price (low to high)"
    Then the first item should be the cheapest