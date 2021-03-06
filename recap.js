// Literals, arrays, and objects
const num = 4;
const str = 'This Is A String';
const bool = false;
const simpleArray = [];

// Creating a simple object
const simpleObject = {};

const mixedArray = [num, str, bool, simpleArray, simpleObject];
const obj = {
  num,
  str,
  bool,
  simpleArray,
  simpleObject,
};

console.log(mixedArray);
console.log(obj);

// Difference between arrays and objects
console.log(`mixedArray[0] : ${mixedArray[0]}`);
console.log(`obj[0] : ${obj[0]}`);
console.log(`obj.num : ${obj.num}`);

const pets = ['cat', 'dog', 'snake', 'turtle', 'lamb'];
const favoritePet = 'cat';

const pickRandomPet = () => {
  const favoritePetDuplicated = new Array(5).fill(favoritePet);
  const randomArray = [...pets, ...favoritePetDuplicated];

  const randomIndex = Math.floor(Math.random() * randomArray.length);
  console.log(randomArray[randomIndex]);
};
