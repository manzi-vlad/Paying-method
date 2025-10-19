const subscribeBtn = document.getElementById("subscribeBtn");
const Visabtn = document.getElementById("Visabtn");
const MasterCardbtn = document.getElementById("MasterCardbtn");
const Paypalbtn = document.getElementById("Paypalbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(subscribeBtn.checked){
        subResult.textContent = `Thank you for subscription`;
    }
    else{
         subResult.textContent = `You are not subscribed`;
    }



    if(Visabtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(MasterCardbtn.checked){
         paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(Paypalbtn.checked){
         paymentResult.textContent = `You are paying with Paypal`;
    }
    else{
        paymentResult.textContent = `Choose a payment method`;
    }
   

}