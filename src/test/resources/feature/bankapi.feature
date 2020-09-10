@Functionaltest
Feature: To test the Banking Application. 

@tc01
Scenario Outline: To input the data from the feature file
Given The user
When send request with "<title>","<type>","<Holdertype>","<AccountNo>","<Balance>" to Banking site
Then The status code of banking site should be <"statusCode">
And user Id should be created in banking application

 

Examples:
|title         |type     |Holdertype   |AccountNo   |Balance  |
|Epf account|current  |Single       |1001001    |42000    |

 

@tc02
Scenario: To validate if the user is able to get all the data from the url given
Given the user send the request to get all the data
When the user should be able to view all the data in the cosole

 

@tc03
Scenario: To verify how many accounts are present
Given The user sends the request to count the number accounts in the file
Then The counting will take place and will be stored in a variable
And the total number of accounts will be displayed

 

@tc04
Scenario: To check how many accounts are joint accounts
Given The user sends the request to find the number of accounts that is joint accounts
Then the count for number of accounts that is joint account is taken
And The count will be displayed

 

@tc05
Scenario: to check how many accounts have balance greater than 200000
Given The user will send the request to display the nember of accounts that have balance greater than 200000
Then the count for accounts greater than 200000 is taken
And the count for those accounts will be displayed

 

@tc06
Scenario: To check how many account number ends with 02
Given The user sends the request to find the number of accounts that ends with 02
Then the count for account number ends with 02
And the count for those that ends with 02 accounts will be displayed 

 

@tc07
Scenario: To verify if we can use the filter method to filter out the ids 3 and 4
Given The user sends the request to find the number of accounts with ids 3 and 4
Then the count for account number ends with ids 3 and 4
And the count for those with ids 3 and 4  will be displayed 

 


@tc08
Scenario: to display all the accounts in ascending order
Given The user sends request to display accounds in ascending order
Then the accounts will be sorted in ascending order
And the sorted data will be displayed in the console

 

@tc09
Scenario: To Display the content of page Three
Given the user sends the request to view content of third page
Then the page Three contents will be accessed 
And the contents in page Three will be displayed in the console