// Hide Cashout Section
 document.getElementById('cashout-container').style.display="none";
 document.getElementById('addmoney-container').style.display="block";
 document.getElementById('transfer-container').style.display="none";
 document.getElementById('coupon-code').style.display="none";
document.getElementById('addmoney-box').addEventListener("click",function(){
    // this.style.backgroundColor = "red";
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="block";

    document.getElementById('coupon-code').style.display="none";
})

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
  
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

   

    if(convertedAmount >= 50){
  
        if(convertedPin === 1234){
            // ghotona gotamu eikhanei
            const sum = convertedMainBalance + convertedAmount;
          
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert("Provide Valid Pin !");
        }
    }
    else{
        alert("Amount Minimum 50 ");
    }

})