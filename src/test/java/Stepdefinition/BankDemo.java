package Stepdefinition;

import api.BankAppApi;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankDemo {
	 BankAppApi apiobj=new BankAppApi();

	 

	//poststeps
	@Given("^The user$")
	public void the_user() throws Throwable {
	   
	}

	 

	@When("^send request with \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" to Banking site$")
	public void send_request_with_to_Banking_site(String title, String type, String holdertype, String accno, String balance) throws Throwable {
	apiobj.apiPostValues(title, type, holdertype, accno, balance);}

	 

	@Then("^The status code of banking site should be <\"([^\"]*)\">$")
	public void the_status_code_of_banking_site_should_be(String arg1) throws Throwable {
	   
	}

	 

	@Then("^user Id should be created in banking application$")
	public void user_Id_should_be_created_in_banking_application() throws Throwable {
	   
	}
	//getsteps
	    @Given("^the user send the request to get all the data$")
	    public void the_user_send_the_request_to_get_all_the_data() throws Throwable {
	        System.out.println("the data will be displayed");
	    }

	 

	    @When("^the user should be able to view all the data in the cosole$")
	    public void the_user_should_be_able_to_view_all_the_data_in_the_cosole() throws Throwable {
	      apiobj.fnapigetvalues();
	    }
	    
	//count number of accounts
	    @Given("^The user sends the request to count the number accounts in the file$")
	    public void the_user_sends_the_request_to_count_the_number_accounts_in_the_file() throws Throwable {
	       apiobj.countAcc();
	    }

	 

	    @Then("^The counting will take place and will be stored in a variable$")
	    public void the_counting_will_take_place_and_will_be_stored_in_a_variable() throws Throwable {
	       
	    }

	 

	    @Then("^the total number of accounts will be displayed$")
	    public void the_total_number_of_accounts_will_be_displayed() throws Throwable {
	       
	    }
	//joint accounts
	    @Given("^The user sends the request to find the number of accounts that is joint accounts$")
	    public void the_user_sends_the_request_to_find_the_number_of_accounts_that_is_joint_accounts() throws Throwable {
	       
	    }

	 

	    @Then("^the count for number of accounts that is joint account is taken$")
	    public void the_count_for_number_of_accounts_that_is_joint_account_is_taken() throws Throwable {
	        apiobj.jointAcc();
	        
	    }

	 

	    @Then("^The count will be displayed$")
	    public void the_count_will_be_displayed() throws Throwable {
	        
	    }
	//balance greater than 200000
	    @Given("^The user will send the request to display the nember of accounts that have balance greater than (\\d+)$")
	    public void the_user_will_send_the_request_to_display_the_nember_of_accounts_that_have_balance_greater_than(int arg1) throws Throwable {
	       apiobj.balance(arg1);
	    }

	 

	    @Then("^the count for accounts greater than (\\d+) is taken$")
	    public void the_count_for_accounts_greater_than_is_taken(int arg1) throws Throwable {
	       
	    }

	 

	    @Then("^the count for those accounts will be displayed$")
	    public void the_count_for_those_accounts_will_be_displayed() throws Throwable {
	        
	    }
	//account number ending with 02
	    @Given("^The user sends the request to find the number of accounts that ends with (\\d+)$")
	    public void the_user_sends_the_request_to_find_the_number_of_accounts_that_ends_with(int arg1) throws Throwable {
	        apiobj.AccountEnd(arg1);
	        
	    }

	 

	    @Then("^the count for account number ends with (\\d+)$")
	    public void the_count_for_account_number_ends_with(int arg1) throws Throwable {
	       
	    }

	 

	    @Then("^the count for those that ends with (\\d+) accounts will be displayed$")
	    public void the_count_for_those_that_ends_with_accounts_will_be_displayed(int arg1) throws Throwable {
	            }
	//account id 3 and 4
	    @Given("^The user sends the request to find the number of accounts with ids (\\d+) and (\\d+)$")
	    public void the_user_sends_the_request_to_find_the_number_of_accounts_with_ids_and(int arg1, int arg2) throws Throwable {
	       apiobj.acc3And4(arg1, arg2);
	    }

	 

	    @Then("^the count for account number ends with ids (\\d+) and (\\d+)$")
	    public void the_count_for_account_number_ends_with_ids_and(int arg1, int arg2) throws Throwable {
	       
	    }

	 

	    @Then("^the count for those with ids (\\d+) and (\\d+)  will be displayed$")
	    public void the_count_for_those_with_ids_and_will_be_displayed(int arg1, int arg2) throws Throwable {
	        
	    }
	//ascending order
	    @Given("^The user sends request to display accounds in ascending order$")
	    public void the_user_sends_request_to_display_accounds_in_ascending_order() throws Throwable {
	     apiobj.sort();  
	    }

	 

	    @Then("^the accounts will be sorted in ascending order$")
	    public void the_accounts_will_be_sorted_in_ascending_order() throws Throwable {
	       
	    }

	 

	    @Then("^the sorted data will be displayed in the console$")
	    public void the_sorted_data_will_be_displayed_in_the_console() throws Throwable {
	        
	    }
	//Contents of page three
	    @Given("^the user sends the request to view content of third page$")
	    public void the_user_sends_the_request_to_view_content_of_third_page() throws Throwable {
	      apiobj.page();
	    }

	 

	    @Then("^the page Three contents will be accessed$")
	    public void the_page_Three_contents_will_be_accessed() throws Throwable {
	       
	    }

	 

	    @Then("^the contents in page Three will be displayed in the console$")
	    public void the_contents_in_page_Three_will_be_displayed_in_the_console() throws Throwable {
	       
	    }
	 
   
    }
    























