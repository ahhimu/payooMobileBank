document.getElementById('pay-bill').addEventListener("click",function(){
    document.getElementById('coupon-code').style.display="none";
    document.getElementById('cashout-container').style.display="none";
    document.getElementById('addmoney-container').style.display="none";
    document.getElementById('transfer-container').style.display="none";
    document.getElementById('paybill-container').style.display="block";
    document.getElementById('transection-history').style.display="none";
})

document.getElementById('paybill-btn').addEventListener("click",function(event){
event.preventDefault();
alert("Thanks For Using Our Bill Pay System. We are Working as soon as possible.!  ")
})