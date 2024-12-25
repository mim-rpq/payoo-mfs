
// add money to the account 
// step-1: add an event handler to the money button inside the form   /
document.getElementById('btn-add-money')
    .addEventListener('click' ,function(event){
    // prevent page relode after form submit 
    event.preventDefault();
    // step-2: get money to be added to the account 

    const addMoneyInput = document.getElementById('input-add-money').value;
   
    // get the pin number 

    const pinNumberInput = document.getElementById('input-pin-number').value

})