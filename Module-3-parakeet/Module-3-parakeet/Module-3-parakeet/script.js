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

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var SpecialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric ="0123456789"
var multiSelect ="";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {

// Prompts
var passwordlength = prompt ("How many characters would you like this password to be? Select between 8 and 128"); 
if(passwordlength <8)
{
  alert("Password must be over 8 characters in length")
  // code if passwordlength is <8 will need to be notified password needs to be 8 or greater characters>>
}else{
  // code if condition is false
}
if(passwordlength >128)
{
  alert("Password must be under 128 characters in length")
}

var characteruppercase = confirm ("Do you want Uppercase characters included in your password?")
var characterlower = confirm ("Do you want Lowercase characters included in your password?")
var characternumeric = confirm ("Do you want Numeric characters included in your password?")
var characterspecial = confirm ("Do you want Special Symbols included in your password?")


if(characteruppercase === false && characterlower === false && characternumeric === false && characterspecial === false){

  alert("Password must contain at least one of the four character sets")
}

if(characteruppercase === true){
  multiSelect += uppercase
}
if(characterlower === true){
  multiSelect += lowercase
}
if(characternumeric === true){
  multiSelect += numeric
}
if(characterspecial === true){
  multiSelect += SpecialSymbols
}
console.log (multiSelect)
// Get a random character from string based off how long string is. 
// Need a four loop - Iterates for however long the password length is. 
// Inside of the four loop you will be given a random character. 
// Take random character and add to variable name final password
// When completed with function 


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
