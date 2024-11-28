let btn = document.getElementById('btn')
let userName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById('password');
let message = document.getElementById("message");

btn.onclick = function(){
    if(userName.value === ''){
        alert('Please Enter your Name')
    }
    else if (email.value === '') {
        alert('Please Enter your E-mail')
    } 
    else if(phone.length >= 10) {
        alert('Please Enter your Phone ture')
    }
    else if(password.length >= 8){
        alert('Please Enter your password ture')
    }
    else if(message.value === ''){
        alert('Please Send me')
    }
    else{
        let parms = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            phone : document.getElementById("phone").value,
            message : document.getElementById("message").value,
        }
        emailjs.send("service_pnzuub9" , "template_wzq7e37" , parms).then(alert("Email Sent!!"))
    }
}