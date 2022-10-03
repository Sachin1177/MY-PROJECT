let button = document.getElementById("btn");

button.addEventListener("click",function (){

const gram = parseInt(document.getElementById("grams").value);   //input value

const type = document.getElementById("type").value;             //weight types 
 
if(gram === "" || isNaN(gram)){

    document.getElementById("grams").focus();

    document.getElementById("error").innerHTML = "Please provide a valid weight";
    
    document.getElementById("output").innerHTML = "";

}else{
    document.getElementById("error").innerHTML = "";
    
    switch (type) {

     case "Pounds":
        convert_pounds(gram);  
         break;
     case "Kilograms":
        convert_Kilograms(gram);
         break;
     case "ounces":
        convert_ounces(gram);
         break;
     case "Stones":
        convert_Stone(gram);
         break;
         default:
        alert("Error");
   }


   function convert_pounds (gram){
    let rate = 0.0022,
    pounds;

    pounds = gram * rate;

    document.getElementById("output").innerHTML = 
    gram + " grams = " + pounds.toFixed(3) + " Pounds"

   }

   function convert_Kilograms (gram){
    let rate = 0.001,
    kilogram;

    kilogram = gram * rate;

    document.getElementById("output").innerHTML = 
    gram + " grams = " + kilogram.toFixed(3) + " kilogram"

    
   }

   function convert_ounces (gram){
    let rate = 0.035274,
    ounces;

    ounces = gram * rate;

    document.getElementById("output").innerHTML = 
    gram + " grams = " + ounces.toFixed(3) + " ounces"

      
   }

   function convert_Stone (gram){
    let rate = 0.00015,
    stone;

    stone = gram * rate;

    document.getElementById("output").innerHTML = 
    gram + " grams = " + stone.toFixed(3) + " stone"

    
   }



}

});

