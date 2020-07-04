//prompts to ask user 
var confirmcap = confirm ("Do you want capital letters?")
var confirmlow = confirm ("do you want lower case letters?")
var confirmnumb = confirm ("do you want numbers?")
var confirmchar = confirm ("do you want characters?")

//generate random password
function generate (){

//set password length/complexity 
let complexity = document.getElementById("Slider").value;

//possible passwords values that will be used to generate password
let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789*&#$!";

let password="";
 console.log(password)
//create for loop to choose password charachters
for(var i=0;i<=complexity;i++){
    password= password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
console.log(password)
} 
//add password to text box/display area 
document.getElementById("display").value = password;


}


