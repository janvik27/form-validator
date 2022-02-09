console.log("this is project 4");

//grab username, email and phone number
const username= document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validName = false;
let validPhone= false;
$('#failure').hide();
$('#success').hide();

username.addEventListener('blur',()=>{
    console.log("username is blurred");
    
    // validate username here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;  // should start with a character between a to z, and can be folllowed by any number, characters upto the length of 10  
    let str= username.value;
    console.log(regex,str);
    if(regex.test(str))
    {
        console.log("Your name is valid");
        username.classList.remove('is-invalid');
        validName=true;
    }
    else
    {
        console.log("Your name is invalid");
        username.classList.add('is-invalid');
        validName=false;
    }
})

email.addEventListener('blur',()=>{
    console.log("email is blurred")
    //validate email here

    let regex= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str= email.value;

    if(regex.test(str))
    {
        console.log("Email is valid");
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else
    {
        console.log("Email is invalid");
        email.classList.add('is-invalid');
        validEmail=false;
    }

})

phone.addEventListener('blur',()=>{
    console.log("phone number is blurred");
    // validate number here
    let regex= /^[1-9][0-9]{9}/;

    let str= phone.value;

    if(regex.test(str))
    {
        console.log("phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else
    {
        console.log("phone number is not valid");
        phone.classList.add('is-invalid');
        validPhone=false;
    }
})

let submit= document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("you clicked on submit");
    
    if(validEmail && validName && validPhone)
    {
        let failure= document.getElementById('failure');
        console.log(`Username, phone number and email address are valid.
        Submitting the form!`)
        let success= document.getElementById('success');

        success.classList.add('show');
        // failure.classList.remove("show");
        // $("#failure").alert("close"); 
        $('#failure').hide();                        
        $('#success').show();
    }
    else
    {
        console.log(`One or more values in username, phone number and email address are invalid.
        Hence, not submitting the form!`)
        let failure =document.getElementById('failure');
        // let success= document.getElementById("success");
        failure.classList.add('show');
        // success.classList.remove("show");
        $('#success').hide();  
        $('#failure').show();                      // grabbing success using jquery
    }

})
