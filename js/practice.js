// var request = confirm ("Would you like to enter a number?");
// console.log(request);
// if (request){
//     var number =  prompt ("Enter your number!");
// }
// if (number %2 === 0){
//     alert("even!");
// }
// else if (number %2 !== 0){
//     alert("odd!");
//
// }
// var bigNumber = 100 + parseInt(number);
// alert("your number plus 100 is..." + bigNumber);
// if (number < 0){
//     alert("number is negative!")
// }
// else if (number > 0){
//     alert("number is positive, just like you!")
// }
//
// var WouldYouLikeToEnterANumber = function () {
//
//
//     var request = confirm ("Would you like to enter a number?");
//     console.log(request);
//     if (request){
//         var number =  prompt ("Enter your number!");
//     }
//     if (number %2 === 0){
//         alert("even!");
//     }
//     else if (number %2 !== 0){
//         alert("odd!");
//
//     }
//     var bigNumber = 100 + parseInt(number);
//     alert("your number plus 100 is..." + bigNumber);
//     if (number < 0){
//         alert("number is negative!")
//     }
//     else if (number > 0){
//         alert("number is positive, just like you!")
//     }
// };
// WouldYouLikeToEnterANumber();


var HiWhatsYourName = function (input) {

    if (input === "Jordan"){
     console.log("Hello " + input);

       var password = prompt("password please");
        if (password === "IRock1!") {
            console.log("Welcome!");
        }

    }
    else if (input !== "Jordan") {
        return "Go away!!!";
    }
};

console.log(HiWhatsYourName("Jordan"));

