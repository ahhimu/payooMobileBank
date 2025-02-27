


document.getElementById('transfer-box').addEventListener("click",function(){
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="none";
    document.getElementById('transfer-container').style.display="block";
    document.getElementById('coupon-code').style.display="none";
    document.getElementById('paybill-container').style.display="none";
    document.getElementById('transection-history').style.display="none";
    
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

        const container = document.getElementById('transection-container');

    
    
    if(recipientNumber.length !== 11){
        alert("Wrong Recipient Number");
        return;
    }
    if(convertedtransferAmount >= 50){
        if(convertedPin === 1234 && pin.length === 4){
            // Ghotona Gotamu
            const sum = convertedMainBalance - convertedtransferAmount;
              
            document.getElementById('main-balance').innerText = sum;

            const now = new Date();
            const formattedTime = now.toLocaleString(); 

            const p = document.createElement("p");
            p.style.border = "2px solid black"
            p.style.padding = "8px";
            p.style.backgroundColor = "White";
            p.style.borderRadius = "15px";
            p.style.textAlign = "justify";
           
            p.innerText = `
            Blance Transfer Successfylly! Amount: ${convertedtransferAmount}, Account Nember: ${recipientNumber} at ${formattedTime}. Now Balance: ${sum}
            Thank You. `;
            container.appendChild(p);

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
    