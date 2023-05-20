// Creates variables eligible to be used in generated passwords
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Splits variables into individual array items for randomization into generated password
var alphaUpperArray = alphaUpper.split("");
var alphaLowerArray = alphaLower.split("");
var numArray = num.split("");
var specCharArray = specChar.split("");


// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  password.value = passwordText;

// Asks user expected length of password and validates it
  var passLength = prompt("How many characters would you like your password to be?");

    if(passLength <8 || passLength >128) {
      alert("The password needs to be between 8 and 128 characters long. Please start again by selecting 'Generate Password'.");
    }
// Asks user one at a time what criteria they are looking to meet, adds the element to the end of the array   
    else {
      if(confirm("If you would like your password to contain UPPERCASE LETTERS select 'OK'.\nIf you would NOT like uppercase letters select 'Cancel'.")){
        Array.prototype.push.apply(passwordText, alphaUpperArray);
      }
      if(confirm("If you would like your password to contain LOWERCASE LETTERS select 'OK'.\nIf you would not like lowercase letters select 'Cancel'.")){
        Array.prototype.push.apply(passwordText, alphaLowerArray);
      }
      if(confirm("If you would like your password to contain NUMBERS select 'OK'.\nIf you would not like numbers select 'Cancel'.")){
        Array.prototype.push.apply(passwordText, numArray);
      }
      if(confirm("If you would like your password to contain SPECIAL CHARACTERS select 'OK'.\nIf you would not like special characters select 'Cancel'.")){
        Array.prototype.push.apply(passwordText, specCharArray);
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

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
