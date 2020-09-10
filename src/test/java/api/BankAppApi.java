package api;

import static net.serenitybdd.rest.SerenityRest.given;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;

public class BankAppApi {

    Response response;
    List<String> ID;
    List<String> Holdertype;
    List<String> Bala;
    List<String> Accno;
    List<String> allacc;
    
   //Status Code 200 
    public  void fnapigetvalues()
    {
        com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().when().get("http://18.222.188.206:3333/accounts");
        response.then().assertThat().statusCode(200);
        response.prettyPrint();
    }
    
   //Status Code 201 and Insertion of data 
    public void apiPostValues(String title,String type,String Holdertype,String accno,String Balance ) throws IOException
    {
        Path path=Paths.get("src/test/resources/Body.json");
        String json=new String(Files.readAllBytes(path));
        json=json.replace("titleArg",title).replace("typeArge",type).replace("HolderArge", Holdertype).replace("AccountArg",accno).replace("Balarge", Balance);
        com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().when().body(json).post("http://18.222.188.206:3333/accounts");
        response.then().assertThat().statusCode(201);
        response.prettyPrint();
        }
    
   //Get Count of total no. of id's
    public void countAcc()
    {
    	int count=0;
    response=RestAssured.get("http://18.222.188.206:3333/accounts");
    ID=response.jsonPath().getList("id");
    for(int i=0;i<=ID.size();i++)
    {
        count++;
    }
     System.out.println("The total number of accounts present in this page="+count);
    }
   
   //Get total number of joint accoounts
   
    public void jointAcc()
    {
        int c=0;
        response=RestAssured.get("http://18.222.188.206:3333/accounts");
        Holdertype=response.jsonPath().getList("'Holder type'");
        System.out.println(Holdertype);
        for(int i=0;i<Holdertype.size();i++)
        {
        if(Holdertype.get(i)!=null)
        {
        if(Holdertype.get(i).equalsIgnoreCase("joint"))
        {
            c++;
        }
        }
        }
        System.out.println("The total number of accounts that are of the type joint = "+c);
       
       
    }
    
    //Balance check for 20000
    public void balance(int arg1)
   
    {
    	int sum=0;
     int s;
     int i=0;
        response=RestAssured.get("http://18.222.188.206:3333/accounts");
        Bala=response.jsonPath().getList("Balance");
        while(i<=Bala.size())
        {
            try
            {
            if(Bala.get(i)!=null)
            {
            s=Integer.parseInt(Bala.get(i));
                    if(s>arg1)
            {
                sum++;
            }
        }
            }
            catch(Exception e)
            {
               
            }
            i++;
       
    }
        System.out.println("The number of accounts with balance 200000= "+sum);
    }
   // Count Account number ending with two
    public void AccountEnd(int arg1)
    {
        int sum=0;
         int s;
         int i=0;
            response=RestAssured.get("http://18.222.188.206:3333/accounts");
            Accno=response.jsonPath().getList("AccountNo");
            while(i<=Accno.size())
            {
                try
                {
                if(Accno.get(i)!=null)
                {
                s=Integer.parseInt(Accno.get(i));
                        if(s%100==arg1)
                {
                    sum++;
                }
            }
                }
                catch(Exception e)
                {
                   
                }
                i++;
           
        }
            System.out.println("The number of accounts number ending with 02 = "+sum);
    }
   // Account number ending with 3 and 4
    public void acc3And4(int arg1,int arg2)
    {
                                                                                             
        com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().when().get("http://18.222.188.206:3333/accounts"+"?id="+arg1+"&id="+arg2);
        response.then().assertThat().statusCode(200);
        response.prettyPrint();
       
       
    }
    //Sort according to title
    public void sort()
    {
        com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().when().get("http://18.222.188.206:3333/accounts?_sort=title&_order=asc");
        response.then().assertThat().statusCode(200);
        System.out.println("The accounts that are sorted according to it's title is displayed below:");
        response.prettyPrint();
       
    }
   //List of account in page 3
    public void page()
    {
        com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().when().get("http://18.222.188.206:3333/accounts?_page=3");
        response.then().assertThat().statusCode(200);
        System.out.println("The list of accounts in the page 3 is displayed below:");
        response.prettyPrint();
    }

}
