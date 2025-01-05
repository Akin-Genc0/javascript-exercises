const reverseString = function(String) {

let res = String.split("").reverse().join("");
return res;

};



console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
