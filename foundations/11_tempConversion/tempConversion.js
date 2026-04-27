const convertToCelsius = function(fWert) {
    const ergebnis = (fWert-32)*5/9
    const gerundet = Number(ergebnis.toFixed(1))
    return gerundet
};

const convertToFahrenheit = function(cWert) {
    const ergebnis = (cWert*9/5)+32
    const gerundet = Number(ergebnis.toFixed(1))
    return gerundet
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
