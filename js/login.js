 //  step 1 set event handler //
 document.getElementById('button-login')
 .addEventListener('click', function(event){

    // step-2: prevent default bahavior ( pkrevent reloading browser) //
     event.preventDefault();
     

     // step-3: get the phone number

     const phoneNumber = document.getElementById('phone-number').value;
     const pinNumber = document.getElementById('pin-number').value
    //  console.log(phoneNumber, pinNumber)


     if(phoneNumber === '012' && pinNumber === '34435'){
            console.log('you are loged in');
            window.location.href ='/homepage.html';
     }
     else{
        alert('wrong phn number or pin')
     }
 });