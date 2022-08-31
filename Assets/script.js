// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  /* These are the prompts to get the array to select the charactesr from */

  var characterCount = ((window.prompt("Length of Password? 8 - Characters Min, 128 characters max"))*1);

  if((characterCount >= 8) && (characterCount <= 128)) {

    var upperCaseValue = confirm("Would you like the password to include uppercase letters?");

    var lowerCaseValue = confirm("Would you like the password to include lowercase letters?");

    var numberValue = confirm("Would you like the password to include numbers?");

    var specialValue = confirm("Would you like the password to include special characters?");

    if ((upperCaseValue === false) && 
    (lowerCaseValue === false) &&
    (numberValue === false) && 
    (specialValue === false)  )   {
  confirm("Please select at least one character set");
  } 


  }

  else {
    confirm("Please try again with a number between 8-128");
  }
  

  // This are just the test consoles
  console.log(characterCount);
  console.log(upperCaseValue);
  console.log(lowerCaseValue);
  console.log(numberValue);
  console.log(specialValue);


// Possible options for the array set list
// upperCaseValue [true,false]
// loweCaseValue[true,false]
// number[true,false]
// special[true,false]

/*if one of the variables is true, then conct the array with the original list, and keep adding it in*/


let population = [];

if (upperCaseValue === true) {
  population = population.concat(upperCase);
};

if (lowerCaseValue === true) {
  population = population.concat(lowerCase);
};

if (numberValue === true) {
  population = population.concat(number);
};

if (specialValue === true) {
  population = population.concat(symbol);
};

//This is the test out what the array values are 
console.log(population);

var i =  0;


let final = '';

  for ( let i = 0; i < (characterCount); i++){
  
    var j = population[Math.floor(Math.random() * population.length)];

    final += j;

    console.log(characterCount);
    console.log(i);
    console.log(final);
  }
  //This to see the logic of how the passwords are generating
  console.log(characterCount);
  console.log(i);
  console.log(final);
return final;
}




// These are the arrays that the password will pull off of
const upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ]

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '\\', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', ',', '.', '/', '-', '=']
  

