// Assignment Code
var generateBtn = document.querySelector("#generate");
var getPassword = document.querySelector("#getPassword");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (password == undefined) {
    return (passwordText.value = "");
  }
}
//generates password by randomly selecting one of the selected criterias, then uses a for loop to add a random character from the randomly selected criteria.
function generatePassword() {
  var selectedCriteria = document.querySelectorAll(
    'input[name="criteria"]:checked'
  );

  var passwordLength = document.querySelector('input[name="length"]').value;
  var password = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select criteria and enter a valid password length.");
    return;
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
  var allCharacters = "";

  //This for loop adds the selected criteria to allCharacters

  for (let i = 0; i < selectedCriteria.length; i++) {
    if (selectedCriteria[i].defaultValue == "lowercase") {
      allCharacters += lowercase;
    } else if (selectedCriteria[i].defaultValue == "uppercase") {
      allCharacters += uppercase;
    } else if (selectedCriteria[i].defaultValue == "numeric") {
      allCharacters += numeric;
    } else if (selectedCriteria[i].defaultValue == "special") {
      allCharacters += special;
    }
  }

  //Randomly selects from allCharacters to the length of the input

  for (let i = 0; i < passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
}

function passwordCriteria() {
  var showCriteria = document.querySelector(".criteriaDiv");
  showCriteria.classList.remove("displayCriteria");
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
getPassword.addEventListener("click", writePassword);

//Password criteria: length 8-128 characters, what type of characters lowercase, uppercase, numeric, special characters
