"use strict";
(function () {


 // var userInput;
 //
 //
 //    do {
 //        userInput = prompt("Input an odd number between 1 and 50");
 //
 //    }while(userInput %2 === 0 || isNaN(userInput)|| userInput > 50);
 //    alert(userInput);
 //
 //
 //
 //
 //
 //    console.log(userInput);
 //
 //    for (var i = 1; i <= 50; i++) {
 //
 //        if (i % 2 === 0) {
 //            // Skip the even numbers.
 //            continue;
 //        }
 //
 //        // console.log (typeof userInput); (to check type of)
 //
 //        if (userInput == i) {
 //            console.log("Yikes! Skipping number: " + i);
 //        } else {
 //            console.log("Here is an odd number: " + i);
 //        }
 //
 //    }



    for (var i=1; i <= 100; i++){
        if (i % 3 === 0)
            console.log("fizz");
        else if (i % 5 === 0)
            console.log("buzz");
        else if (i % 15 === 0)
            console.log("fizzbuzz");
        else console.log(i)

    }

















})();
