let calculate = document.querySelector(".calculate");
let resetBtn = document.querySelector(".reset");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    let billAmt = document.getElementById("amount").value;
    let disPercentage = document.getElementById("discount_percentage").value;
    let discountAmt = document.getElementById("dicount_amount");
    let finalPay = document.getElementById("pay");
    
   discountAmt.value = (billAmt * disPercentage) / 100 ;
   
   finalPay.value =  billAmt - discountAmt.value ;
});

resetBtn.addEventListener("click",() =>{
    window.location.reload();
});