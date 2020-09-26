
//Creating arrays for all character.
var lowerCaseChart = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChart = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChart = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChart = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var possibleCharacters = "";
var password = "";


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

