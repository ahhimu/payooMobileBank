document.getElementById('logout-btn').addEventListener("click",function(){

    window.location.href="./index.html";
   })




// Hide Cashout Section
 document.getElementById('cashout-container').style.display="none";
 document.getElementById('addmoney-container').style.display="block";
 document.getElementById('transfer-container').style.display="none";
 document.getElementById('coupon-code').style.display="none";
 document.getElementById('paybill-container').style.display="none";
 document.getElementById('transection-history').style.display="none";

document.getElementById('addmoney-box').addEventListener("click",function(){
    // this.style.backgroundColor = "red";
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="block";
    document.getElementById('transection-history').style.display="none";
    document.getElementById('coupon-code').style.display="none";
})

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
  
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const accountNumber = document.getElementById('account-number').value;
    // const conacnumber = parseFloat(accountNumber);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const container = document.getElementById('transection-container');


    if(convertedAmount >= 50  ){
  
        if(convertedPin === 1234){
            // ghotona gotamu eikhanei
            const sum = convertedMainBalance + convertedAmount;
          
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
            Add Money Recived. Amount: ${convertedAmount}, Form This ${accountNumber} at ${formattedTime}.Balance: ${sum}
             `;
            container.appendChild(p);







        }
        else{
            alert("Provide Valid Pin !");
        }
    }
    else{
        alert("Amount Minimum 50 ");
    }

})