// "use strict";
// console.log ("string test");
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  *  > sayHello("codeup") // returns "Hello, codeup!"
//  */
//  function sayHello(name) {
// return "Hello, "+ name + "!";
// }
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
// var helloMessage = sayHello("Floyd");
// console.log(helloMessage);
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
// var myName = "Floyd"
// console.log(sayHello(myName));
//
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  *  > isTwo(1) // returns false
//  *  > isTwo(2) // returns true
//  *  > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
// function isTwo(number) {
//  console.log(number);
//  if (number === 2){
//   return true;
//
// }else {
//   return false;
//  }
//
// }
//
// console.log(isTwo(random))
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Example:
//  * > calculateTip(0.20, 20) // returns 4
//  */
// function calculateTip(tipPercentage,bill) {
//     return "tip: "  + (tipPercentage/100) * bill;
// }
// console.log(calculateTip(0.2,300));
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// var bill= prompt("What is your bill?");
// var tip = prompt("What would you percentage would you like to tip?");
// alert(calculateTip(tip,bill));
//
// function identity(input) {
//     return input;
// }
// console.log(identity("input"));
function getRandomNumber(min, max) {
    var random = Math.floor((Math.random() * max) + min);
    console.log(random);
    return random;

}
console.log(getRandomNumber(1,100));

function first(input) {
    var firstCharacter = input.charAt(0);
    return firstCharacter;
    
}
console.log(first("sleep"));

function last(input) {
    var lastCharacter = input.charAt(input.length - 1);
    return lastCharacter;

}
console.log(last("sleep"));

function rest(input) {
    var allButFirst = input.substring(1, input.length);
    return allButFirst;

}
console.log(rest("sleep"));

function reverse(input) {
    var newString = "";
    // Turn the string into an array
    var inputAsArray = input.split("");
    console.log(inputAsArray);
    // Reverse the array
inputAsArray = inputAsArray.reverse();console.log(inputAsArray);

    // Join the array and turn it back into a string
var inputAsString = inputAsArray.join("");
console.log(inputAsString);
    return newString;
}
reverse("sleep");

