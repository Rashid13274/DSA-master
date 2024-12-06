let re;

re = /hello/;

re = /hello/i  // i = case insensitive
re = /hello/g // Global search

// console.log(re.source);

// console.log(re);

// exec()  :- Returns the result in array or null;

// const result = re.exec('hello world');
// console.log(result);
// console.log(result.input); // what is string or input.
// console.log(result.index); // at what index in string we found the result
// console.log(result[0]); 

console.log(re.source);
console.log(re);
console.log(re.exec('Hello')); // return array or null;
console.log(re.test('Hello')); // returns true or false 

let str = 'hello world';
console.log(str.match(re)); // returns  the matched  string in array.
console.log(str.search(re));
console.log(str.replace(re, 'New String'));



//  test():- Return the  result in boolean (true | false)

// const result = re.test('hello world');
// console.log(result);


// match():- returns the result in array or null;
// const str = 'Hello there';
// const result =  str.match(re);
// console.log(result);

// output: [ 'Hello' ]


// search():- Return index of the first match if  not found returns -1
// const str = 'Hello world';
// const result = str.search(re);
// console.log(result);

// replace():- Returns new string with some or all matches of a pattern
// const str = 'Hello world';
// const result = str.replace(re, 'hi');
// console.log(result);
