Feature: Dashboard Test Case

    This page will consists of all the testcases related to dashboard page

    Background: Check the Login is working with Valid Credentials
    Given I am on the login page
    When I enter valid username and password
    Then I should be able to login successfully

    Scenario: Validate Add to Cart for single product
    Given I am on the dashboard page
    When I click on the Add to Cart button for Single Product
    Then Product should be added to the Cart

    Scenario: Validate Add to Cart for Multiple Products
    Given I am on the dashboard page
    When I click on the Add to Cart button for Multiple Products
    Then Multiple Product should be added to the Cart

    # Scenario: Validate adding same products multiple times to cart
    # Given I am on the dashboard page
    # When I click on the Add to Cart button for Same Product multiple times
    # Then Same Product should be added to the Cart multiple times

    Scenario: Validate View Product
    Given I am on the dashboard page
    When I click on the View button of product
    Then I should be able to view the product details

    Scenario: Validate Filter Product using Search Product Text
    Given I am on the dashboard page
    When I filter using Product Text ZARA COAT 3
    Then Product ZARA COAT only should be displayed as per the filter criteria
    
    Scenario: Validate Filter Product using Invalid Search Product Text
    Given I am on the dashboard page
    When I filter using Invalid Product Text
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Validate Filter Product using Min Price and Max Price
    Given I am on the dashboard page
    When I filter using Min Price and Max Price
    Then Products should be displayed as per filtered criteria

    Scenario: Validate Filter Product using Invalid Min Price and Max Price
    Given I am on the dashboard page
    When I filter using Invalid Min Price and Max Price
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Validate Filter Product using Fashion Categories Checkbox
    Given I am on the dashboard page
    When I filter using Fashion Categories Checkbox
    Then Product ZARA COAT only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Electronics Categories Checkbox
    Given I am on the dashboard page
    When I filter using Electronics Categories Checkbox
    Then Product IPHONE PRO only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Household Categories Checkbox
    Given I am on the dashboard page
    When I filter using Household Categories Checkbox
    Then Product ADIDAS ORIGINAL only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Shirts Categories Checkbox
    Given I am on the dashboard page
    When I filter using Shirts Categories Checkbox
    Then Product ZARA COAT only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Mobiles Categories Checkbox
    Given I am on the dashboard page
    When I filter using Mobiles Categories Checkbox
    Then Product IPHONE PRO only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Shoes Categories Checkbox
    Given I am on the dashboard page
    When I filter using Shoes Categories Checkbox
    Then Product ADIDAS ORIGINAL only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using T-Shirts Categories Checkbox
    Given I am on the dashboard page
    When I filter using T-Shirts Categories Checkbox
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Validate Filter Product using Laptops Categories Checkbox
    Given I am on the dashboard page
    When I filter using Laptops Categories Checkbox
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Validate Filter Product using Men Categories Checkbox
    Given I am on the dashboard page
    When I filter using Men Categories Checkbox
    Then Products should be displayed as per filtered criteria

    Scenario: Validate Filter Product using Women Categories Checkbox
    Given I am on the dashboard page
    When I filter using Women Categories Checkbox
    Then Product ZARA COAT only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Fashion and Shirts Categories Checkbox
    Given I am on the dashboard page
    When I filter using Fashion and Shirts Categories Checkbox
    Then Product ZARA COAT only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Electronics and Laptops Categories Checkbox
    Given I am on the dashboard page
    When I filter using Electronics and Laptops Categories Checkbox
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Validate Filter Product using Household, Shoes and Men Categories Checkbox
    Given I am on the dashboard page
    When I filter using Household, Shoes and Men Categories Checkbox
    Then Product ADIDAS ORIGINAL only should be displayed as per the filter criteria

    Scenario: Validate Filter Product using Electronics, Mobiles and Women Categories Checkbox
    Given I am on the dashboard page
    When I filter using Electronics, Mobiles and Women Categories Checkbox
    Then No Products Found should be displayed and there should not be products displayed in the page

    Scenario: Logout from Application
    Given I am on the dashboard page
    When I click on Sign Out button
    Then User should be logged out from the Application