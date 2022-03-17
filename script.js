// Assignment Code
// create array for each password option, uppercase, lowecars, numbers, and special character. leave one array empty so you can put all of the options in that array
var upperLetterArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerLetterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numerArr = ['1','2','3','4','5','6','7','8','9']
var specialArr = ['!', '@', '#', '$', '%', '^', '&', '*','(',')','+','=','[',']','.','?','/','`','<','>','\''];
var empty = []

// generatePassword function is undefefined define it 
// First part
// prompt users with password length, need to make sure it is more than 8 but less than 128
// We will refer to this number later on so we need to declare it as a variable
// make sure that it is a number (NaN)
function generatePassword () {
  var passLength = prompt ("Hello! How many characters would you like your password to have? Please select a number between 8-128. ")
    while (passLength < 8 || passLength > 128 ) {
      alert ("That is an invalid amount of characters");
      return passLength;
  } while (isNaN(passLength)) {
      prompt ("Please select a valid number!");
      return passLength; 
}
// Second Part
// prompt users to if they want certain password options, the same ones we defined above
// same thing here, we will be refering to these later on so store them as variables

var upperAdd = confirm("Would you like to add Upper Case letters to your password?");

var lowerAdd = confirm("Would you like to add Lower Case letters to your password");

var numberAdd = confirm("Would you like to add numbers to your password?")

var specialAdd = confirm("Would you like to add special characters to your password?")

// Third Part
// write if statements for each choice, use .concat to add each of these choices to our empty array
if (upperAdd) {
  empty = empty.concat(upperLetterArr)
} 
if (lowerAdd) {
  empty = empty.concat(lowerLetterArr)
}
if (numberAdd) {
  empty = empty.concat(numerArr)
}
if (specialAdd) {
  empty = empty.concat(specialArr)
}
// Fourth Part
// generate a password based off the above choices
// define a variable for password (set it to an empty string)
// ultize a for loop (for password length) as well as the math.floor and math.random functions (keep numbers whole and random)

var genPass = '';
for (var i =0; i <passLength; i++) {
  var randoL = Math.floor(Math.random() * empty.length);
  genPass =  genPass+ empty[randoL];
}

// Final part 
// return password to page using a return statement

  return genPass;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
