// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution # 1
function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = reverseString;
