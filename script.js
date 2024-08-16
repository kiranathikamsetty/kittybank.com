function debitTransaction (){
    let amount=25000;
    let amountRecivedIn =parseInt(document.getElementById("debitAmountRecived").value);
    let showBalance= (amount-amountRecivedIn);
    let totalbalance= document.getElementById("debitbalance").value=showBalance;
}

function CreditTransaction(){
    let amount=25000;
    let amountRecivedIn =parseInt(document.getElementById("creditamountrecived").value);
    let showBalance= (amount+amountRecivedIn);
    let totalbalance= document.getElementById("CreditBalance").value=showBalance;
}







document.addEventListener("DOMContentLoaded",()=>{
    let popupPin=document.querySelector("#popup");
    let btnAcc =document.querySelector("#accbtn");
    let verifyPin =document.querySelector("#verify");

    btnAcc.addEventListener('click',()=>{
        popupPin.style.display='block';
        //alert("pin succesfull");
        //window.location="account.html";
    });

    verifyPin.addEventListener('click',()=>{
        let getInput=document.getElementById("numberInput").value;
        let password= '143';

        if(password===getInput){
            alert("pin succesfull");
            window.location="account.html";
        }
        else[
            alert("IncorrectPin, please try again")
        ]
    });    
});







document.addEventListener("DOMContentLoaded",()=>{
    let popupPin=document.querySelector("#popup2");
    let btnAcc =document.querySelector("#accbtn2");
    let verifyPin =document.querySelector("#verify2");

    btnAcc.addEventListener('click',()=>{
        popupPin.style.display='block';
        //alert("pin succesfull");
        //window.location="account.html";
    });

    verifyPin.addEventListener('click',()=>{
        let getInput=document.getElementById("numberInput2").value;
        let password= '143';

        if(password===getInput){
            alert("pin succesfull");
            window.location="debit.html";
        }
        else[
            alert("IncorrectPin, please try again")
        ]
    });
});








document.addEventListener("DOMContentLoaded",()=>{
    let popupPin=document.querySelector("#popup3");
    let btnAcc =document.querySelector("#accbtn3");
    let verifyPin =document.querySelector("#verify3");

    btnAcc.addEventListener('click',()=>{
        popupPin.style.display='block';
        //alert("pin succesfull");
        //window.location="account.html";
    });

    verifyPin.addEventListener('click',()=>{
        let getInput=document.getElementById("numberInput3").value;
        let password= '143';

        if(password===getInput){
            alert("pin succesfull");
            window.location="credit.html";
        }
        else[
            alert("IncorrectPin, please try again")
        ]
    });
});







