Feature: Login Page Test

    This test suite file will ensure that the login page is working as expected

    Scenario: Check the login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    Then I should be able to login successfully

    Scenario: Check the login with invalid credentials
    Given I am on the login page
    When I enter valid username and invalid password
    Then 'Incorrect email or password' error message should be displayed

    Scenario: Check the login with blank values
    Given I am on the login page
    When I click Login button with blank username and password
    Then 'Email is required' and 'Password is required' should be displayed

    Scenario: Check the login with blank password
    Given I am on the login page
    When I enter valid username and click Login button with blank password
    Then 'Password is required' error message should be displayed

    Scenario: Check the login with data in email field without '@gmail.com'
    Given I am on the login page
    When I enter invalid username without '@gmail.com'
    Then 'Enter Valid Email' error message should be displayed

    Scenario: Check the login with data in email field without 'com'
    Given I am on the login page
    When I enter invalid username without 'com'
    Then 'Enter Valid Email' error message should be displayed

    Scenario: Navigate to Register page using 'Don't have an account? Register here' link
    Given I am on the login page
    When I click on 'Don't have an account? Register here' link
    Then User should be navigated to Register Page

    Scenario: Navigate to Forgot Password page using 'Forgot password?' link
    Given I am on the login page
    When I click on 'Forgot password?' link
    Then User should be navigated to Forgot Password Page