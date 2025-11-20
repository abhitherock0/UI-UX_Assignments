// ii. Array operations
let numbers = [25, 10, 85, 42, 63];

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

let ascending = [...numbers].sort((a, b) => a - b);
let descending = [...numbers].sort((a, b) => b - a);

console.log("Numbers:", numbers);
console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);
