/* 
You need to create a unique username. The username needs to have the first letter of the first
and last name of the user 
along with the current 10 digit unix timestamp and three random digits at the end. 
If the first or last name are missing, replace the first letter(s) with 'X'. 
*/

function generateUsername(firstName, lastName) {
    // Replace missing first or last names with 'X'
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : 'X';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : 'X';
  
    // Use Date.now() to retrieve the current Unix timestamp in milliseconds.
    // Convert it to seconds (10 digits) by dividing by 1000 and rounding.
    // Get current 10-digit Unix timestamp
    const timestamp = Math.floor(Date.now() / 1000);
  
    // Generate three random digits
    const randomDigits = Math.floor(100 + Math.random() * 999); // Ensures three digits
  
    // Combine components to create the username
    const username = `${firstInitial}${lastInitial}${timestamp}${randomDigits}`;
  
    return username;
  }
  
  // Example usage
  // const username = generateUsername("John", "Doe");
  // console.log("Generated Username:", username);

  