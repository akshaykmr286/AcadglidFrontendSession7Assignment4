/*
this is the constructor function which is nested also
The first funcvtion takes the argument and it passes it to the function inside the first function and then the second function is nested with another functiuon called details function which is finally returned by calling the first function with the afgument callademployee name.

The second varibale in the first function is the company name which is alwas same for all employees is "INCEDO"
*/

/*****************************************************
**** constructor function with nested function *******
*****************************************************/
function First(empName){
	this.company="INCEDO";
    //nested function second
    this.second=function(){
        var comp= this.company;
        //details function inside second function
  	    function details(){
            //closure comp and empName passed here
    	   return "I am "+empName+" working at "+comp;
          }
  	 return details();//return details function
   }
}

/*
We also can achieve the same without constructor function

the we can call the inner function by shorthand notaion first()();
*/


/*****************************************************
****   function to be called on button click   *******
*****************************************************/

function myFunction(){
    var fName = document.getElementById("fName").value;
    var opdiv = document.getElementById("anom");
    
    //If text field is blank then nshow the alert else proceed
    if(fName == ""){
        //alert warning if text field is blank
        alert("Please Enter The name First");
         //focus on the text field
        document.getElementById("fName").focus();
       }else{
           //create instance of first function passing the arguiment
            var obj1=new First(fName);
           console.log(obj1);
           //display the hidden result div
           opdiv.style.display="block";
           //pass the output to the result div
           opdiv.innerHTML = obj1.second();
       }
}
