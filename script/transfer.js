


document.getElementById('transfer-box').addEventListener("click",function(){
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="none";
    document.getElementById('transfer-container').style.display="block";
    document.getElementById('coupon-code').style.display="none";
    
    
    })
    
    
    document.getElementById("transfer-btn").addEventListener("click",function(event){
    event.preventDefault();
    
    const recipientNumber = document.getElementById("recipent-number").value;
    const transferAmount = document.getElementById("transfer-amount").value;
    const convertedtransferAmount = parseFloat(transferAmount);
    const pin = document.getElementById('transfer-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
    
    
    if(recipientNumber.length !== 11){
        alert("Wrong Recipient Number");
        return;
    }
    if(convertedtransferAmount >= 50){
        if(convertedPin === 1234 && pin.length === 4){
            // Ghotona Gotamu
            const sum = convertedMainBalance - convertedtransferAmount;
              
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert("Please Provide Valid Pin Number!");
            // return;
        }
    }
    else{
        alert("Minimum Amount Is 50");
    }
    
    
    })
    