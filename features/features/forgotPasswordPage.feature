Feature: Forgot Password Page Testcases

    This page will consists of all the testcases related to Forgot Password

    Scenario: Change password with valid details
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password for valid username and password
    Then Password should be changed successfully

    Scenario: Change password with all blank values
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password for blank username and password
    Then All the field should be marked as Required fields

    Scenario: Change password with invalid user email
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password for invalid username
    Then User Not Found error message should be displayed

    Scenario: Change password with blank password field
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password without providing values in password and confirm password fields
    Then Password and Confirm Password fields should be marked as Required fields

    Scenario: Change password with different values in password and confirm password
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password by providing different values in password and confirm password fields
    Then Password and Confirm Password must match with each other error message should be displayed

    Scenario: Change password with data in email field without @gmail.com
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password by providing email id without @gmail.com
    Then Enter Valid Email error message should be displayed

    Scenario: Change password with data in email field without com suffix
    Given I am on the login page
    When I click on Forgot Password link
    And I change the password by providing email id without com
    Then Enter Valid Email error message should be displayed

    Scenario: Validate navigating to Login page from Forgot Password page
    Given I am on the login page
    When I click on Forgot Password link
    And I click on Login link
    Then Login page should be displayed

    Scenario: Validate navigating to Register page from Forgot Password page
    Given I am on the login page
    When I click on Forgot Password link
    And I click on Register link
    Then Registration page should be displayed