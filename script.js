

//Write a function capitaliseKeys, which takes an object as an argument, and returns a new object with the same key-value pairs except all the keys have been capitalised.

const ingredients = {
  water: "500ml",
  carrots: "4",
  coriander: "a handful",
  spices: {
    cumin: "1 tsp",
    paprika: "2 tsp",
    cayenne: "1 tsp",
  },
};

function capitaliseKeys (object1){
//declares object made from array
const object2 = Object.fromEntries(

//makes array from object
Object.entries(object1)

//uses array method .map to change key-value pairs
.map(([ key, val ]) => [ key.toUpperCase(), val])
);
return object2;
}
//adapted from example of Object manipulation on MDN Object.fromEntries(). 

console.log(capitaliseKeys(ingredients));


//Write a function stringToObject

// stringToObject takes one parameter, a string. The string is made up of key-value pairs formatted as follows: “key1:value1,key2:value2,…”

// stringToObject should return an object made up of the key-value pairs in the string. Assume all values are strings.

let string1 = "apricots:4,peaches:9,plums:2"

function stringToObject (string) {
let array = string.split(',')
console.log(array)
let map = array.map(x => x.split(':'))
console.log(map)
const object2 = Object.fromEntries(map)
return object2;
}
//breaks up string into array then map before turning into object

console.log(stringToObject(string1))


// Write a function shoppingList that accepts a single parameter, a string. The string is a list of ingredients, separated by a comma, formatted as below:

// “2 tomatoes, 1 egg, 3 pumpkins”

// The function shoppingList should return an object where the keys are the ingredient names, and the values are the number of the ingredients needed.

let string2 = "2 tomatoes, 1 egg, 3 pumpkins"

function shoppingList (string) {

//turns string into array, separated at commas 
let array = string2.split(',');
//creates new array, trimming surrounding whitespace then breaking at remaining space between number and word. modified is now an array of arrays. 
let modified = array.map(function(x) {
x = x.trim();
x = x.split(' ');
return x;
});

//reverses number and word in the subarrays and ensures number is read as a number rather than as a string
let swappedArray = modified.map(([ key, value ]) => [ value, parseInt(key)])

//transforms the list of pairs into an object
let object = Object.fromEntries(swappedArray)
return object;
}

console.log(shoppingList(string2))
