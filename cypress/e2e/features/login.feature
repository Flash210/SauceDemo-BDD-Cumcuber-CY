Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the inventory page

  Scenario: Login with empty username
    Given I am on the login page
    When I login with an empty username and a valid password
    Then I should see an error message "Epic sadface: Username is required"

  Scenario: Login with empty password
    Given I am on the login page
    When I login with a valid username and an empty password
    Then I should see an error message "Epic sadface: Password is required"

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
