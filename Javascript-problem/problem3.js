/* You need to count the number of lines in a text file that end in a carriage return (ASCII code 13)
 as well as the average length of those lines. The file may be large. What programming process would you use?

 \r used for carriage return. ( ASCII value is 13) \n used for new line. it is escape character.
 eg:- 
 console.log('hello world');
 console.log('hello \r world);
*/



// Approach:
// 1. Read the File in Chunks:
//    Use a streaming approach to process the file incrementally rather than loading it entirely into memory, especially if the file is large.
// 2. Detect Line Endings:
//    Identify lines that end with a carriage return (\r or ASCII code 13). Keep track of the total number of such lines.
// 3. Track Line Lengths:
//    Sum the lengths of lines ending in a carriage return.
// 4. Calculate Average Length:
//    Compute the average line length once the file is fully processed.

// Implementation in Node.js:
// Here’s how you can achieve this using the fs module and readline to process the file line-by-line:

const fs = require('fs');
const readline = require('readline');

async function processFile(filePath) {
    // Initialize counters
    let lineCount = 0;
    let totalLength = 0;

    // Create a readable stream and use readline for line-by-line processing
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity, // Handle both \r and \n line endings
    });

    for await (const line of rl) {
        // Check if the line ends with a carriage return (\r)
        if (line.endsWith('\r')) {
            lineCount += 1; // Increment line count
            totalLength += line.length; // Add the length of the line
        }
    }

    // Calculate the average length of lines ending with \r
    const averageLength = lineCount > 0 ? totalLength / lineCount : 0;

    // Output the results
    console.log(`Lines ending with carriage return: ${lineCount}`);
    console.log(`Average length of those lines: ${averageLength.toFixed(2)}`);
}

// Example usage
const filePath = './large_text_file.txt'; // Replace with the path to your file
// processFile(filePath).catch((err) => console.error(err));

console.log('hello world');
console.log(`hello \rworld`);

