$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/bankapi.feature");
formatter.feature({
  "line": 2,
  "name": "To test the Banking Application.",
  "description": "",
  "id": "to-test-the-banking-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functionaltest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To input the data from the feature file",
  "description": "",
  "id": "to-test-the-banking-application.;to-input-the-data-from-the-feature-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "send request with \"\u003ctitle\u003e\",\"\u003ctype\u003e\",\"\u003cHoldertype\u003e\",\"\u003cAccountNo\u003e\",\"\u003cBalance\u003e\" to Banking site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The status code of banking site should be \u003c\"statusCode\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user Id should be created in banking application",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-test-the-banking-application.;to-input-the-data-from-the-feature-file;",
  "rows": [
    {
      "cells": [
        "title",
        "type",
        "Holdertype",
        "AccountNo",
        "Balance"
      ],
      "line": 14,
      "id": "to-test-the-banking-application.;to-input-the-data-from-the-feature-file;;1"
    },
    {
      "cells": [
        "Epf account",
        "current",
        "Single",
        "1001001",
        "42000"
      ],
      "line": 15,
      "id": "to-test-the-banking-application.;to-input-the-data-from-the-feature-file;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To input the data from the feature file",
  "description": "",
  "id": "to-test-the-banking-application.;to-input-the-data-from-the-feature-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Functionaltest"
    },
    {
      "line": 4,
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "send request with \"Epf account\",\"current\",\"Single\",\"1001001\",\"42000\" to Banking site",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The status code of banking site should be \u003c\"statusCode\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user Id should be created in banking application",
  "keyword": "And "
});
formatter.match({
  "location": "BankDemo.the_user()"
});
formatter.result({
  "duration": 182191592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epf account",
      "offset": 19
    },
    {
      "val": "current",
      "offset": 33
    },
    {
      "val": "Single",
      "offset": 43
    },
    {
      "val": "1001001",
      "offset": 52
    },
    {
      "val": "42000",
      "offset": 62
    }
  ],
  "location": "BankDemo.send_request_with_to_Banking_site(String,String,String,String,String)"
});
formatter.result({
  "duration": 3540280159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "statusCode",
      "offset": 44
    }
  ],
  "location": "BankDemo.the_status_code_of_banking_site_should_be(String)"
});
formatter.result({
  "duration": 66560,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.user_Id_should_be_created_in_banking_application()"
});
formatter.result({
  "duration": 30720,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To validate if the user is able to get all the data from the url given",
  "description": "",
  "id": "to-test-the-banking-application.;to-validate-if-the-user-is-able-to-get-all-the-data-from-the-url-given",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@tc02"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the user send the request to get all the data",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user should be able to view all the data in the cosole",
  "keyword": "When "
});
formatter.match({
  "location": "BankDemo.the_user_send_the_request_to_get_all_the_data()"
});
formatter.result({
  "duration": 1425069,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_user_should_be_able_to_view_all_the_data_in_the_cosole()"
});
formatter.result({
  "duration": 2557185566,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To verify how many accounts are present",
  "description": "",
  "id": "to-test-the-banking-application.;to-verify-how-many-accounts-are-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "The user sends the request to count the number accounts in the file",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "The counting will take place and will be stored in a variable",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the total number of accounts will be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "BankDemo.the_user_sends_the_request_to_count_the_number_accounts_in_the_file()"
});
formatter.result({
  "duration": 2150611394,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_counting_will_take_place_and_will_be_stored_in_a_variable()"
});
formatter.result({
  "duration": 23040,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_total_number_of_accounts_will_be_displayed()"
});
formatter.result({
  "duration": 29440,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To check how many accounts are joint accounts",
  "description": "",
  "id": "to-test-the-banking-application.;to-check-how-many-accounts-are-joint-accounts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc04"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The user sends the request to find the number of accounts that is joint accounts",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the count for number of accounts that is joint account is taken",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "The count will be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "BankDemo.the_user_sends_the_request_to_find_the_number_of_accounts_that_is_joint_accounts()"
});
formatter.result({
  "duration": 1108482,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_count_for_number_of_accounts_that_is_joint_account_is_taken()"
});
formatter.result({
  "duration": 1675398838,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_count_will_be_displayed()"
});
formatter.result({
  "duration": 47786,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "to check how many accounts have balance greater than 200000",
  "description": "",
  "id": "to-test-the-banking-application.;to-check-how-many-accounts-have-balance-greater-than-200000",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@tc05"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "The user will send the request to display the nember of accounts that have balance greater than 200000",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the count for accounts greater than 200000 is taken",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the count for those accounts will be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 96
    }
  ],
  "location": "BankDemo.the_user_will_send_the_request_to_display_the_nember_of_accounts_that_have_balance_greater_than(int)"
});
formatter.result({
  "duration": 2168397016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 36
    }
  ],
  "location": "BankDemo.the_count_for_accounts_greater_than_is_taken(int)"
});
formatter.result({
  "duration": 110507,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_count_for_those_accounts_will_be_displayed()"
});
formatter.result({
  "duration": 27307,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To check how many account number ends with 02",
  "description": "",
  "id": "to-test-the-banking-application.;to-check-how-many-account-number-ends-with-02",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@tc06"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "The user sends the request to find the number of accounts that ends with 02",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the count for account number ends with 02",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "the count for those that ends with 02 accounts will be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 73
    }
  ],
  "location": "BankDemo.the_user_sends_the_request_to_find_the_number_of_accounts_that_ends_with(int)"
});
formatter.result({
  "duration": 1749774612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 39
    }
  ],
  "location": "BankDemo.the_count_for_account_number_ends_with(int)"
});
formatter.result({
  "duration": 170240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 35
    }
  ],
  "location": "BankDemo.the_count_for_those_that_ends_with_accounts_will_be_displayed(int)"
});
formatter.result({
  "duration": 399787,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "To verify if we can use the filter method to filter out the ids 3 and 4",
  "description": "",
  "id": "to-test-the-banking-application.;to-verify-if-we-can-use-the-filter-method-to-filter-out-the-ids-3-and-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@tc07"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "The user sends the request to find the number of accounts with ids 3 and 4",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "the count for account number ends with ids 3 and 4",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the count for those with ids 3 and 4  will be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 67
    },
    {
      "val": "4",
      "offset": 73
    }
  ],
  "location": "BankDemo.the_user_sends_the_request_to_find_the_number_of_accounts_with_ids_and(int,int)"
});
formatter.result({
  "duration": 1297131474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 43
    },
    {
      "val": "4",
      "offset": 49
    }
  ],
  "location": "BankDemo.the_count_for_account_number_ends_with_ids_and(int,int)"
});
formatter.result({
  "duration": 431787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    },
    {
      "val": "4",
      "offset": 35
    }
  ],
  "location": "BankDemo.the_count_for_those_with_ids_and_will_be_displayed(int,int)"
});
formatter.result({
  "duration": 380161,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "to display all the accounts in ascending order",
  "description": "",
  "id": "to-test-the-banking-application.;to-display-all-the-accounts-in-ascending-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@tc08"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "The user sends request to display accounds in ascending order",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the accounts will be sorted in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "the sorted data will be displayed in the console",
  "keyword": "And "
});
formatter.match({
  "location": "BankDemo.the_user_sends_request_to_display_accounds_in_ascending_order()"
});
formatter.result({
  "duration": 1482655338,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_accounts_will_be_sorted_in_ascending_order()"
});
formatter.result({
  "duration": 48640,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_sorted_data_will_be_displayed_in_the_console()"
});
formatter.result({
  "duration": 61867,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "To Display the content of page Three",
  "description": "",
  "id": "to-test-the-banking-application.;to-display-the-content-of-page-three",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@tc09"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "the user sends the request to view content of third page",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "the page Three contents will be accessed",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "the contents in page Three will be displayed in the console",
  "keyword": "And "
});
formatter.match({
  "location": "BankDemo.the_user_sends_the_request_to_view_content_of_third_page()"
});
formatter.result({
  "duration": 1303543002,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_page_Three_contents_will_be_accessed()"
});
formatter.result({
  "duration": 64854,
  "status": "passed"
});
formatter.match({
  "location": "BankDemo.the_contents_in_page_Three_will_be_displayed_in_the_console()"
});
formatter.result({
  "duration": 70827,
  "status": "passed"
});
});