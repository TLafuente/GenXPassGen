// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
// Prompts
prompt ("How many characters would you like this password to be? Select between 8 and 128"); 
 
prompt ("What types of characters do you require? Uppercase, Lowercase, Numeric, and/or SpecialSymbols?"); Uppercase; Lowercase; Numeric; SpecialSymbols; }



var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var SpecialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric ="0123456789"
var multiSelect =[];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
