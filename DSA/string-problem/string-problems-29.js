/* 
This code solves the "Remove Duplicate Letters" problem, which is also known as "Smallest 
Subsequence of Distinct Characters" on LeetCode (Problem #316). Here's the problem description:

### Problem: Remove Duplicate Letters

**Description:**
Given a string `s`, remove duplicate letters so that every letter appears once and only once.
 The result must be the lexicographically smallest possible string made from the original string's
  characters.

**Requirements:**
1. Remove duplicate characters from the string
2. Maintain the relative order of characters (cannot reorder arbitrarily)
3. Return the lexicographically smallest possible result
4. Each character in the final result must appear exactly once

**Examples:**
```
Input: s = "bcabc"
Output: "abc"

Input: s = "cbacdcbc"
Output: "acdb"
```

**Key Concepts:**
- Lexicographical order (dictionary order) must be maintained
- You can only remove characters, not rearrange them arbitrarily
- If you have multiple choices for removing duplicates, always keep the sequence that
 results in the lexicographically smallest string

The solution uses a stack-based approach with these key components:
- A stack to build the result
- A Set to track seen characters
- A map to store last occurrences of characters

This is considered a medium to hard level problem as it requires careful handling of both
 duplicate removal and lexicographical ordering constraints.
*/


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
  