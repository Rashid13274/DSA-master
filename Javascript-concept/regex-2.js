let re;
re = /hello/;
re = /hello/i;

// Metacharacter Symbols:-

// Must start with
re = /^h/i

// Must ends with
re = /world$/i;

// Must begin and ends with
re = /^world$/i


// Bracket [] - Character Sets:-

// must be a or e
re = /gr[ae]y/i;

// Must be G or F
re =/[Gf]ray/i

// Match anything except G OR F
re = /[^GF]ray/i

// Match any UpperCase letter
re = /[A-Z]ray/;

// Mathch any lowercase letter
re = /[a-z]ray/;

//  Match any letter
re = /[A-Za-z]ray/;

// Match any digit
re = /[0-9]ray/;


// const str = 'Gray?';
let str = '01ray';
// const result = re.exec(str);
const result = re.test(str);
// console.log(result);
