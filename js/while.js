'use strict';
(function () {


// var i = 2;
// while (i <= 65536) {
// console.log(i);
// i *=2;
// }


var totalCones = Math.floor(Math.random() * 50) + 50;


do {
// Get cones to be sold
var soldCones =  Math.floor(Math.random() * 5) + 1;
// Message
console.log("totalCones: " + totalCones);
console.log(soldCones + " cones sold");


if (totalCones >= soldCones) {
    // Sell the cones
    totalCones -= soldCones;
        // Then check if cones =0 0
        if (totalCones === 0){
            console.log("Yay, I sold them all!!");
        }
} else if (totalCones < soldCones){
    console.log("cannot sell you" + soldCones + " I only have"+ totalCones);

}else {
    console.log("error")
}



// Do all of this while we have more than 0 cones.
} while (totalCones > 0);











































})();