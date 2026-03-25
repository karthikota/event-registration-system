$(document).ready(function(){

$("#regForm").submit(function(e){

let name = $("#name").val().trim();
let email = $("#email").val().trim();
let event = $("#event").val();

if(name === "" || email === "" || event === ""){
alert("All fields are required!");
e.preventDefault();
return;
}

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(pattern)){
alert("Enter valid email!");
e.preventDefault();
return;
}

});

});