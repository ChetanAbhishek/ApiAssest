package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class) 
@CucumberOptions( 
		features = "src/test/resources/feature/bankapi.feature" ,
		glue={"Stepdefinition"}, 
		plugin={"pretty", "html:cucumberReport/cucumber-html-report","json:cucumberReport/cucumber-report.json"}
		,tags={"@Functionaltest"}
		)
public class Runner {

}
