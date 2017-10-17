"use strict";
(function () {


 var userInput;


    do {
        userInput = prompt("Input an odd number between 1 and 50");

    }while(userInput %2 === 0 || isNaN(userInput)|| userInput > 50);
    alert(userInput);





    console.log(userInput);

    for (var i = 1; i <= 50; i++) {

        if (i % 2 === 0) {
            // Skip the even numbers.
            continue;
        }

        // console.log (typeof userInput); (to check type of)

        if (userInput == i) {
            console.log("Yikes! Skipping number: " + i);
        } else {
            console.log("Here is an odd number: " + i);
        }

    }





















})();
