// Assignment Code
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','>','<','|']
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr = ['1','2','3','4','5','6','7','8','9','0']



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
var correctPrompts = generatePrompts();
var passwordText = document.querySelector("#password");
if (correctPrompts) {
var newpassword = generatePassword();
passwordText.value = newpassword;
}
else {
passwordText.value = "";
}

}

function generatePassword(){
//generate password based on the promts
var password = ""
for( var i = 0; i < characterlength; i++) {
var randomIndex = Math.floor(Math.random() * choiceArr.length);
password = password + choiceArr[randomIndex];
}
return password; 
}


function generatePrompts() {
choiceArr = [];
characterlength = parseInt(prompt("How many characters would you like in your password?(8 - 128 character")); 
if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) { 
alert("Character length has to be a number, 8 - 128 digits. Please try again.");
return false;
}

if (confirm("Would you like lowercase letters in your password")) {
choiceArr = choiceArr.concat(lowerCassArr);
}
if (confirm("Would you like uppercase letters in your password")) {
choiceArr = choiceArr.concat(upperCassArr);
}
if (confirm("Would you like speical characters in your password")) {
choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm("Would you like numbers in your password")) {
choiceArr = choiceArr.concat(numberArr);
}
return true;


}






