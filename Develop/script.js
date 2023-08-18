
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("User has clicked the button");

return "Generated password here!";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);