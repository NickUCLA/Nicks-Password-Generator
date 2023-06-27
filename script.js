// Assignment Code
var generateBtn = document.querySelector("#generate");
var getPassword = document.querySelector("#getPassword");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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

  selectedCriteria.forEach(function (criteria) {
    if (criteria.value === "lowercase") {
      password += getRandomCharacter(lowercase);
    } else if (criteria.value === "uppercase") {
      password += getRandomCharacter(uppercase);
    } else if (criteria.value === "numeric") {
      password += getRandomCharacter(numeric);
    } else if (criteria.value === "special") {
      password += getRandomCharacter(special);
    }
  });

  var remainingLength = passwordLength - selectedCriteria.length;
  for (let i = 0; i < remainingLength; i++) {
    var randomCriteria =
      selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)]
        .value;
    if (randomCriteria === "lowercase") {
      password += getRandomCharacter(lowercase);
    } else if (randomCriteria === "uppercase") {
      password += getRandomCharacter(uppercase);
    } else if (randomCriteria === "numeric") {
      password += getRandomCharacter(numeric);
    } else if (randomCriteria === "special") {
      password += getRandomCharacter(special);
    }
  }

  function getRandomCharacter(criteria) {
    let password = "";
    password += criteria[Math.floor(Math.random() * criteria.length)];
  }
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
