document.getElementById('bonus-box').addEventListener("click",function(){
    document.getElementById('coupon-code').style.display="block";
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="none";
    document.getElementById('transfer-container').style.display="none";
    document.getElementById('paybill-container').style.display="none";
})


let bonusAdded = false;

document.getElementById('bonus-btn').addEventListener("click",function(event){
    event.preventDefault();

    const bonusField =  document.getElementById('get-bonus').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(bonusAdded){
        alert("Bonus already added!"); 
        return;
    }


    if(bonusField.length === 19){
       const sum = convertedMainBalance + 50 ; 
        document.getElementById('main-balance').innerText = sum;
        alert("Bonus added successfully!");
        bonusAdded = true;
        document.getElementById('bonus-btn').disabled = true;
  
    }
    else{
        alert("Enter A Valid Coupon Code");
    }
 
})