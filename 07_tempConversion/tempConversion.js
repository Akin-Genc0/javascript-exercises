const convertToCelsius = (fen) => fen - 32 * Math.floor(9/5);
 
const convertToFahrenheit = (cel) => cel * Math.floor(9/5) + 32;



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
