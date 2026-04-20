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
  

  
  /* 
  Key Data Structures

  stack:
    An array used to build the result string character by character.
    It maintains characters in a specific, ordered sequence.

  seen:
    A Set to quickly check if a character is already present in the stack.
    This ensures the final string has no duplicate letters.

  lastOccurrence:
    An object (or hash map) that stores the last index where each character appears 
    in the input string. This is crucial for deciding if we can safely remove a 
    character from the stack now, knowing it will appear again later. 
    

  Logic Explained

  The core idea is to iterate through the string and maintain a stack that is always 
  trying to be as "small" (lexicographically) as possible from the beginning.

  The while loop within the main for loop is where the main "magic" happens:

    javascript
    while (
        stack.length > 0 &&
        stack[stack.length - 1] > char &&
        lastOccurrence[stack[stack.length - 1]] > i
    ) {
        seen.delete(stack.pop());
    }

  Use code with caution.

  This loop checks three conditions before pushing a new char onto the stack:

    1. stack.length > 0:
         Ensures the stack is not empty.

    2. stack[stack.length - 1] > char:
         If the current character (char) is lexicographically smaller than the 
         last character in the stack, we might be able to swap them to make the 
         result string start with a smaller character (e.g., swapping b for a).

    3. lastOccurrence[stack[stack.length - 1]] > i:
         This is the crucial safety check. It confirms that the character currently 
         at the top of the stack (stack[stack.length - 1]) appears again later in 
         the string (after the current index i). If it appears again, we can safely 
         remove it from the stack now, because we are guaranteed to process another 
         instance of it later. 

  If all three conditions are true, we pop the larger character from the stack and 
  remove it from the seen set, making room for the smaller current character while 
  still satisfying the "all unique characters" requirement.


  Step-by-Step Walkthrough: bcabc

  Let's trace how the input string s = "bcabc" is processed.

  Initialization:
    lastOccurrence: { 'b': 3, 'c': 4, 'a': 2 }
    stack: []
    seen: Set {}

  Index i | Current Char char | Stack Before while | while Loop Conditions Check 
          | Stack After while | seen | Notes

  0 | b | [] 
    The stack is empty, so the condition fails. 
    ['b'] | { 'b' } 
    'b' is pushed.

  1 | c | ['b'] 
    'b' is not greater than 'c', so the condition fails. 
    ['b', 'c'] | { 'b', 'c' } 
    'c' is pushed.

  2 | a | ['b', 'c'] 
    'c' is greater than 'a'? Yes. 
    The last occurrence of 'c' (4) is greater than the current index (2)? Yes. 
    'c' is popped. 
    ['b'] | { 'b' }

    'b' is greater than 'a'? Yes. 
    The last occurrence of 'b' (3) is greater than the current index (2)? Yes. 
    'b' is popped.

  2 | a | [] 
    The stack is empty, so the condition fails. 
    ['a'] | { 'a' } 
    'a' is pushed.

  3 | b | ['a'] 
    'a' is not greater than 'b', so the condition fails. 
    ['a', 'b'] | { 'a', 'b' } 
    'b' is pushed.

  4 | c | ['a', 'b'] 
    'b' is not greater than 'c', so the condition fails. 
    ['a', 'b', 'c'] | { 'a', 'b', 'c' } 
    'c' is pushed.

  Result:
    The final stack is ['a', 'b', 'c'].
    The function returns "abc" after joining the stack.
*/
