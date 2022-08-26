// const mainjs = require('./../main.js');
const form = document.getElementById('form')
const naam = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

//  console.log( mainjs.addition(10,4));
form.addEventListener('submit',function (e) {
    // Get the Login Name value and trim it
    var fname = naam.value.trim();
    var femail = email.value.trim();
    var fpassword =password.value.trim();
    console.log(fname)
    // Check if empty of not
    if (fname != '' && femail !='' && fpassword !='') {
        if(fpassword.length > 5){
            form.action="/contact"
            form.method='post'
        }
        else{
            alert("Password Is To Short");
            e.preventDefault();
            password.value = '';
        }
    }
    else if(fname ==''){
        alert('First name is empty.');
        e.preventDefault();
        naam.value = '';
        
    }
    else if(femail ==''){
        alert('Eamil is empty.');
        e.preventDefault();
        email.value = '';
    }
    else {
        alert('Password is empty.');
        e.preventDefault();
        password.value = '';
    }
});
