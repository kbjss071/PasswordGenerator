// Assignment code here
// Regular expression for lower and uppercase letter, numeric and special character.
var number = '0123456789'
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var special = ' !"#$%^&*()_~`+-/*:;<>=?@{}[]';
var letterLength = 0;
var char = '';

var generatePassword = function(){
  do {
    var lengthChoice = window.prompt("Enter the number of length between 8 and 128.")
    // if user entered a number smaller than 8 or larger than 128, it will prompt user to enter the number again.
    if (lengthChoice > 128 || lengthChoice < 8){
      window.alert("The number must be between 8 and 128.");
    }

  } while(lengthChoice > 128 || lengthChoice < 8 );

  letterLength = lengthChoice;

  var isIncludeNumeric = window.confirm("Do you want to include numeric characters in your password?");
  if (isIncludeNumeric){
    char.concat(number);
  }

  var isIncludeLower = window.confirm("Do you want to include lowercase characters in your password?");
  if(isIncludeLower){
    char.concat(lower);
  }

  var isIncludeUpper = window.confirm("Do you want to include uppercase characters in your password?");
  if(isIncludeUpper){
    char.concat(upper);
  }

  var isIncludeSpecial = window.confirm("Do you want to include special characters in your password?");
  if(isIncludeSpecial){
    char.concat(special);
  }

  var password = '';
  if (char !== ''){
    for (let i = 0; i < letterLength; i++){
      let randNum = Math.floor(Math.random()*char.length);
      password.concat(char.charAt(randNum));
    }
  } else {
    char.concat(upper);
    for (let i = 0; i < letterLength; i++){
      let randNum = Math.floor(Math.random()*char.length);
      password.concat(char.charAt(randNum));
    }
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
