document.getElementById('bonus-box').addEventListener("click",function(){
    document.getElementById('coupon-code').style.display="block";
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="none";
    document.getElementById('transfer-container').style.display="none";
    document.getElementById('paybill-container').style.display="none";
    document.getElementById('transection-history').style.display="none";
})


let bonusAdded = false;

document.getElementById('bonus-btn').addEventListener("click",function(event){
    event.preventDefault();

    const bonusField =  document.getElementById('get-bonus').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const container = document.getElementById('transection-container');


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


        const now = new Date();
            const formattedTime = now.toLocaleString(); 

            const p = document.createElement("p");
            p.style.border = "2px solid black"
            p.style.padding = "8px";
            p.style.backgroundColor = "White";
            p.style.borderRadius = "15px";
            p.style.textAlign = "justify";
           
            p.innerText = `
            Wow Congratulations!You got Amount : 50  Form Coupon code ${bonusField} Now Balance: ${sum} USDT. ${formattedTime}. 
            Thank You. `;
            container.appendChild(p);





  
    }
    else{
        alert("Enter A Valid Coupon Code");
    }
 
})