document.getElementById('login-btn').addEventListener('click',function(event) {
// console.log('Hello from clicked login btn');
event.preventDefault();

const accountNumber = document.getElementById("Account-number").value;
// const convertedAcNumber = parseInt(accountNumber).value;

const pin = document.getElementById("pin").value;
const convertedPin = parseInt(pin);


if(accountNumber.length === 11){
    // console.log('You Can Log in');
    if(convertedPin === 1234){
        window.location.href="./main.html";
    }
    else{
        alert("Didn't Match Your Pin Number");
    }
}
else{
    alert("You Need Valid Account Number!");
}

})