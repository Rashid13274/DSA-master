var removeDuplicateLetters = function(s) {
    const stack = [];
    const seen = new Set(); // To keep track of characters already in the stack
    const lastOccurrence = {}; // To store the last occurrence index of each character
  
    // Populate the last occurrence dictionary
    for (let i = 0; i < s.length; i++) {
      lastOccurrence[s[i]] = i;
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      // If the character is already in the stack, skip it
      if (seen.has(char)) {
        continue;
      }
  
      // Remove characters from the stack if:
      // 1. They are greater than the current character (for lexicographical order)
      // 2. They appear later in the string (based on lastOccurrence)
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > char &&
        lastOccurrence[stack[stack.length - 1]] > i
      ) {
        seen.delete(stack.pop());
      }
  
      // Add the current character to the stack and mark it as seen
      stack.push(char);
      seen.add(char);
    }
  
    // Join the stack to form the result string
    return stack.join('');
  };
  
  // Example usage
  console.log(removeDuplicateLetters("bcabc")); // Output: "abc"
  console.log(removeDuplicateLetters("cbacdcbc")); // Output: "acdb"
  