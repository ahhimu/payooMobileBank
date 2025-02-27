


document.getElementById('cashout-box').addEventListener("click",function(){
document.getElementById('cashout-container').style.display="block";
document.getElementById('addmoney-container').style.display="none";
document.getElementById('transfer-container').style.display="none";
document.getElementById('paybill-container').style.display="none";
document.getElementById('transection-history').style.display="none";


})


document.getElementById("cashout-btn").addEventListener("click",function(event){
event.preventDefault();

const agentNumber = document.getElementById("Agent-number").value;
const cashOutAmount = document.getElementById("casout-amount").value;
const convertedCashoutAmount = parseFloat(cashOutAmount);
const pin = document.getElementById('cashout-pin').value;
const convertedPin = parseInt(pin);
const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    const container = document.getElementById('transection-container');


if(agentNumber.length !== 11){
    alert("Wrong Agent Number");
    return;
}
if(convertedCashoutAmount >= 50){
    if(convertedPin === 1234 && pin.length === 4){
        // Ghotona Gotamu
        const sum = convertedMainBalance - convertedCashoutAmount;
          
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
            Cash Out Successfylly! Amount: ${convertedCashoutAmount}, Agent Number : ${agentNumber} at ${formattedTime}. Now Balance: ${sum}
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
