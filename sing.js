function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
        
    }
    emailjs.send("service_pnzuub9" , "template_wzq7e37" , parms).then(alert("Email Sent!!"))
}