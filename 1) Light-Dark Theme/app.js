const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");


toggle.classList.toggle("fa-moon");   //toggle do--- click kiya to class add hoga wapas click kiya to hatt jaega
console.log(toggle);

toggle.addEventListener("click" , function (){

    if(toggle.classList.toggle("fa-sun")){

        body.style.background ="white";
        body.style.color="black";

    }else{ 
        body.style.background ="black";
        body.style.color="white";
    }
});
