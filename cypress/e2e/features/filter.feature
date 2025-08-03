# Feature: Filter
#   As a user
#   I want to be able to filter the inventory
#   So that I can easily view items based on specific criteria

#   Background:
#     Given I am on the inventory page

#   # Test Case 1: Filter by Price (Low to High)
#   Scenario: Filter by price (low to high)
#     When I filter by "Price (low to high)"
#     Then the first item should be the cheapest
#     And the last item should be the most expensive

#   # Test Case 2: Filter by Price (High to Low)
#   Scenario: Filter by price (high to low)
#     When I filter by "Price (high to low)"
#     Then the first item should be the most expensive
#     And the last item should be the cheapest

#   # Test Case 3: Filter by Name (A to Z)
#   Scenario: Filter by name (A to Z)
#     When I filter by "Name (A to Z)"
#     Then the first item name should start alphabetically earliest
#     And the last item name should start alphabetically latest

#   # Test Case 4: Filter by Name (Z to A)
#   Scenario: Filter by name (Z to A)
#     When I filter by "Name (Z to A)"
#     Then the first item name should start alphabetically latest
#     And the last item name should start alphabetically earliest

#   # Test Case 5: Verify filter persistence after page reload
#   Scenario: Filter persistence after page reload
#     When I filter by "Price (low to high)"
#     And I refresh the page
#     Then the filter should still be set to "Price (low to high)"
#     And the first item should still be the cheapest

#   # Test Case 6: Verify filter reset to default
#   Scenario: Reset filter to default
#     When I filter by "Price (high to low)"
#     And I reset the filter to default
#     Then the filter should be "Name (A to Z)" by default

#   # Test Case 7: Verify filtering works with an empty inventory
#   Scenario: Filter with empty inventory
#     Given the inventory is empty
#     When I filter by "Price (low to high)"
#     Then I should see a "No items available" message

#   # Test Case 8: Verify correct filter dropdown options
#   Scenario: Validate filter dropdown options
#     When I open the filter dropdown
#     Then I should see the following options:
#       | Name (A to Z)          |
#       | Name (Z to A)          |
#       | Price (low to high)    |
#       | Price (high to low)    |

#   # Test Case 9: Verify filter UI resets after logout/login
#   Scenario: Filter reset after logout/login
#     When I filter by "Price (high to low)"
#     And I log out
#     And I log back in
#     Then the filter should be reset to "Name (A to Z)"
# features/filter.feature

@filter
Feature: Filter
  As a user
  I want to be able to filter the inventory
  So that I can easily view items based on specific criteria

  Background:
    Given I am on the inventory page

  @price-filter @low-to-high
  Scenario: Filter by price (low to high)
    When I filter by "Price (low to high)"
    Then the first item should be the cheapest
    And the last item should be the most expensive

  @price-filter @high-to-low
  Scenario: Filter by price (high to low)
    When I filter by "Price (high to low)"
    Then the first item should be the most expensive
    And the last item should be the cheapest

  @name-filter @a-to-z
  Scenario: Filter by name (A to Z)
    When I filter by "Name (A to Z)"
    Then the first item name should start alphabetically earliest
    And the last item name should start alphabetically latest

  @name-filter @z-to-a
  Scenario: Filter by name (Z to A)
    When I filter by "Name (Z to A)"
    Then the first item name should start alphabetically latest
    And the last item name should start alphabetically earliest

  @persistence
  Scenario: Filter persistence after page reload
    When I filter by "Price (low to high)"
    And I refresh the page
    Then the filter should still be set to "Price (low to high)"
    And the first item should still be the cheapest

  @reset
  Scenario: Reset filter to default
    When I filter by "Price (high to low)"
    And I reset the filter to default
    Then the filter should be "Name (A to Z)" by default

  @empty-inventory
  Scenario: Filter with empty inventory
    Given the inventory is empty
    When I filter by "Price (low to high)"
    Then I should see a "No items available" message

  @dropdown-options
  Scenario: Validate filter dropdown options
    When I open the filter dropdown
    Then I should see the following options:
      | Name (A to Z)          |
      | Name (Z to A)          |
      | Price (low to high)    |
      | Price (high to low)    |

  @logout-reset
  Scenario: Filter reset after logout/login
    When I filter by "Price (high to low)"
    And I log out
    And I log back in
    Then the filter should be reset to "Name (A to Z)"