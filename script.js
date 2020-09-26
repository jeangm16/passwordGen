
//Creating arrays for all character.
var lowerCaseChart = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseChart = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberChart = ["1234567890"];
var specialChart = ["!@#$%^&*"];
var possibleCharacters = "";
var password = "";
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


function writePassword(){
  //add 8 to 128 character limit
  var password = "";
  possibleCharacters = "";
  characterAmount = prompt("How many character would you like you can have 8 to 128");
  if (characterAmount < 8){
    alert("You can pick from 8 to 128")
    return writePassword();
  }
    else if(characterAmount > 128){
      alert("You can pick from 8 to 128")
      return writePassword();
    }

  var useLowerCase = confirm("Would you like to add lowercase characters?");

  var useUpperCase = confirm("would you like to add uppercase characters?");

  var useNumeric = confirm("Would you like to add numeric characters?");

  var useSpecial = confirm("Would you like to add special characters?");

  if (useLowerCase === false &&
    useUpperCase === false &&
    useNumeric === false &&
    useSpecial === false){
      alert("Hey! Pick something");

      return writePassword
    }

    if (useLowerCase){
      possibleCharacters += upperCaseChart;
    }
    if (upperCaseChart){
      possibleCharacters += lowerCaseChart;
    }
    if (useNumeric){
      possibleCharacters += numberChart 
    }
    if (useSpecial){
      possibleCharacters += specialChart
    }

  for (var i = 0; i < characterAmount; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

