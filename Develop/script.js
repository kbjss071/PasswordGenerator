// Assignment code here
// Assign lower and uppercase letter, numeric and special characters to variables.
var number = '0123456789'
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var special = ' !"#$%^&*()_~`+-/*:;<>=?@{}[]';

// Initialize variables to save password length and characters user wants to include.
var letterLength = 0;
var char = '';

// Define generatePassword function
var generatePassword = function(){

  // Use do-while loop to prompt user to enter adequate number 
  do {
    var lengthChoice = window.prompt("Enter the number of length between 8 and 128.")
    // if user entered a number smaller than 8 or larger than 128, it will prompt user to enter the number again.
    if (lengthChoice > 128 || lengthChoice < 8){
      //When user enters a wrong number, a browser alert will be sent
      window.alert("The number must be between 8 and 128.");
    }
  } while(lengthChoice > 128 || lengthChoice < 8 );

  // Store the prompted password length to the initialized variable
  letterLength = lengthChoice;

  //If user wants to include numeric characters, numeric characters will be saved into the initialized variable 'char'
  var isIncludeNumeric = window.confirm("Do you want to include numeric characters in your password?");
  if (isIncludeNumeric){
    char += number;
  }

  //If user wants to include lowercase characters, lowercase characters will be saved into the initialized variable 'char'
  var isIncludeLower = window.confirm("Do you want to include lowercase characters in your password?");
  if(isIncludeLower){
    char += lower;
  }

  //If user wants to include uppercase characters, uppercase characters will be saved into the initialized variable 'char'
  var isIncludeUpper = window.confirm("Do you want to include uppercase characters in your password?");
  if(isIncludeUpper){
    char += upper;
  }

  //If user wants to include special characters, special characters will be saved into the initialized variable 'char'
  var isIncludeSpecial = window.confirm("Do you want to include special characters in your password?");
  if(isIncludeSpecial){
    char += special;
  }

  // Randomly select the defined number of letter from the selected characters
  var password = '';
  if (char !== ''){
    for (let i = 0; i < letterLength; i++){
      let randNum = Math.floor(Math.random()*char.length);
      password += char.substring(randNum, randNum+1)
    }
  } else {
    char += upper;
    for (let i = 0; i < letterLength; i++){
      let randNum = Math.floor(Math.random()*char.length);
      password += char.substring(randNum, randNum+1)
    }
  }

  // Reset the initialized char in case user wants to regenerate new password
  char = '';

  // Return generated password to assign a variable
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
