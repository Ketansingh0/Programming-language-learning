/* Q1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length */

let fullName = prompt("Enter your fullname without spaces");

let userName = '@' + fullName + fullName.length;
console.log(userName);
