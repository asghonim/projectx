const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = [];
const even = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    even.push(input[i]);
  } 
  else {
    odd.push(input[i]);
  }
}
console.log("Odd numbers:", odd);
console.log("Even numbers:", even);
