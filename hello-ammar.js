const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// The length property of an array returns the length of an array 
// The easiest way to add a new element to an array is using the push() method:

const even = [];
const odd = [];
let inputLen = input.length;

for (i = 0; i < inputLen; i++) {
    if (input[i] % 2 == 0) {
        even.push(input[i]);
    } else {
        odd.push(input[i]);
    }
}

console.log("Even Numbers: ", even);
console.log("Odd Numbers: ", odd);