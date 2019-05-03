var words = ["ground", "control", "to", "major", "tom"];

var length = words.map(input => input.length);

var upperCase = words.map(input => input.toUpperCase());

var newWords = words.map(input => input.split("").reverse().join(""));

console.log(length, upperCase, newWords);
