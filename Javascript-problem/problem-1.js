/* 
You have been asked to create a random password generator.
The password generator must ask the user for the desired length (minimum four characters). 
Each password must have:
- At least one digit excluding zero and one (2-9)
- At least one lowercase letter other than a lowercase 'l'
- At least one uppercase letter other than 'O'
- At least one of these special characters: !@#$%^&*

What steps would you follow to produce a valid password? 
*/

function generatePassword(length) {
    const digits = '23456789';
    const lowercase = 'abcdefghijkmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*';
    const allChars = digits + lowercase + uppercase + specialChars;
  
//     // Prompt user for password length
//     let length = parseInt(prompt("Enter the desired password length (minimum 4):"), 10);
//     while (isNaN(length) || length < 4) {
//       length = parseInt(prompt("Invalid input. Please enter a length of at least 4:"), 10);
//     }

  
    // Ensure at least one character from each category
    let password = [
        digits[Math.floor(Math.random() * digits.length)], // 1st digit
        // digits[Math.floor(Math.random() * digits.length)], // 2nd digit
        lowercase[Math.floor(Math.random() * lowercase.length)], // At least one lowercase
        uppercase[Math.floor(Math.random() * uppercase.length)], // At least one uppercase
        specialChars[Math.floor(Math.random() * specialChars.length)] // At least one special char
      ];
    console.log('before pushing ', password)
  
    // Fill the rest of the password length with random characters from all categories
    for (let i = password.length; i < length; i++) {
      password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }
    console.log('After pushing ', password)

  
    // Shuffle the password to randomize the character order
    password = password.sort(() => Math.random() - 0.5);
  
    // Convert array to string and return the password
    return password.join('');
  } 
  
//   Generate and display the password
  const generatedPassword = generatePassword(6);
//   alert(`Your generated password is: ${generatedPassword}`);
  console.log(`Generated Password: ${generatedPassword}`);


