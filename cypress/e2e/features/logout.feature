Feature: Logout
  Scenario: Logout from inventory page
    Given I am logged in
    When I click logout
    Then I should return to the login page