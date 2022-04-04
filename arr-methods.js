const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort(); // mutation
numbers.reverse(); // mutation
numbers.push(); // mutation
numbers.pop(); // mutation

// Functional programming prohibits mutations.. we cannot use them directly
// Workaround for transforming mutating funcs to non-mutatings funcs

// Slice
// Normally used to get a section of elements from within an array

const sliced = numbers.slice(3, 8);
console.log(sliced);

// call slice with no arguments and then call the mutating func after that
console.log(numbers.slice().reverse());

// Sort (mutating func)
// change the order of elements in an array
// takes a func as an argument.
// however the func passed (comparator func takes in two arguments)
// these two args are abstract and stand for any two elements in our array that could be compared
// the return value for any two elements determines the order in which they will appear
// in relation to eachother in the final array

const mixedUpNumbers = [0, 22, 2, 10, 5, 4, 6, 7, 8, 9, 3];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumbers);

const descending = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

const sortDesc = mixedUpNumbers.slice().sort(descending);
console.log(sortDesc);