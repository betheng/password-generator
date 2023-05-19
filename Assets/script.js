var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var alphaUpperArray = alphaUpper.split("");
var alphaLowerArray = alphaLower.split("");
var numArray = num.split("");
var specCharArray = specChar.split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  password.value = passwordText;

  var passLength = prompt("How many characters would you like your password to be?");

    if(passLength <8 || passLength >128) {
      alert("The password needs to be between 8 and 128 characters long. Please start again by selecting 'Generate Password'.");
    }
    else {
      if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(passwordText, alphaUpperArray);
      }
      if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(passwordText, alphaLowerArray);
      }
      if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(passwordText, numArray);
      }
      if(confirm("Would you like your password to contain special characters?")){
        Array.prototype.push.apply(passwordText, specCharArray);
      }
      if(passwordText.length===0){
        alert("You must make at least one selection to generate a password.");
      }
      else{
        for(var i=0; i<passLength; i++){
          var random = Math.floor(Math.random()*passwordText.length);
          password += passwordText[random];
        }
      }
    }
    document.getElementById("password").innerHTML = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
