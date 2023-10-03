document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate");
  const passwordField = document.getElementById("password");

  // Function to generate a random password
  function generatePassword() {
    // Clear any previous passwords
    passwordField.value = "";

    const length = prompt("How many characters would you like this password to be? Select between 8 and 128");

    if (length === null) return; // User canceled

    // Validate the length input
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }

    const includeUpperCase = confirm("Include uppercase characters?");
    const includeLowerCase = confirm("Include lowercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    // Validate that at least one character type is selected
    if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return;
    }

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()?.<>|=+:;,[-_]";

    let availableChars = "";

    if (includeUpperCase) availableChars += uppercaseChars;
    if (includeLowerCase) availableChars += lowercaseChars;
    if (includeNumeric) availableChars += numericChars;
    if (includeSpecial) availableChars += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars.charAt(randomIndex);
    }

    passwordField.value = newPassword;
  }

  // Event listener for the "Generate Password" button
  generateButton.addEventListener("click", generatePassword);
});