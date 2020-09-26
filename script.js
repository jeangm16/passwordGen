

//Creating arrays for all character.
var caseArray = [];
var lowerCaseChart = ["a", "b", "c", "d", "e", "f", "g"
, "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChart = ["A", "B", "C", "D", "E", "F", "G"
 , "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z"];
var numberChart = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChart = ["!", "@", "#", "$", "%", "^", "&", "*"]

function getPasswordOption(){
  //add 8 to 128 charactor limit
  var howManyChars = parseInt(prompt("How many characters?"));
  var useLowerCase = confirm("Would you like to add lowercase characters?");
  var useUpperCase = confirm("would you like to add uppercase characters?");
  var useNumeric = confirm("Would you like to add numeric characters?");
  var useSpecial = confirm("Would you like to add special characters?");

  if (useLowerCase === false &&
    useUpperCase === false &&
    useNumeric === false &&
    useSpecial === false){
      alert("Hey! Pick something");
      return
    }
  var passwordOption = {
    length: howManyChars,
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useNumeric: useNumeric,
    useSpecial: useSpecial
  }
  return passwordOption;
}

function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex]
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates the password
function generatePassword(){
  // do the logic that generates the password
  // and store it in the finalPassword variable
  var result = []
  var possibleCharactors = []
  var gerentedCharactors = []
  var option = getPasswordOption()

  if (option.useSpecial === true){
    possibleCharactors = possibleCharactors.concat(specialChart)
    gerentedCharactors.push(getRandom(specialChart))
  }
  //do this 3 more times 

  for(var i=0; i<option.length; i++){
    //loop to pos cara arry 
    //push to re arry 
    // grab a random character from one of the arrays and add it to the finalPassword variable
    // finalPassword = finalPassword + "a"
  }
//put another loop for gerented chara arry
return result
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This happens when the page loads
function startApp(){
  
  generatePassword();
}

startApp();
