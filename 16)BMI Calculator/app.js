let button = document.getElementById("btn");

button.addEventListener("click", () => {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("output");
    let height_status = false;
    let weight_status = false;

    //height validation
    if(height === "" || isNaN(height) || height <= 0){
        document.getElementById("height_error").innerHTML = 
        "Please provide a valid height";
    }else{
        document.getElementById("height_error").innerHTML = "";
        height_status = true;
    }

    //weight validation
    if(weight === "" || isNaN(weight) || weight <= 0){
        document.getElementById("weight_error").innerHTML = 
        "Please provide a valid weight";
    }else{
        document.getElementById("weight_error").innerHTML = "";
        weight_status = true;
    }
     
     if( height_status && weight_status ){
         
        let BMI = (weight / ((height * height) / 10000)).toFixed(2);

           if (BMI <18.6){
                 result.innerHTML = "Under Weight : " +  BMI;
            }else if(BMI >= 18.6 && BMI < 24.9){
                 result.innerHTML = "Normal : " +  BMI;
            }else{
                result.innerHTML = "Over Weight : " +  BMI;
           }

    }else{
       alert("The form has errors");
       result.innerHTML = "";
     }

});