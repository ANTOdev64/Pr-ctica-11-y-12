function toFahrenheit (x){return (x*9/5)+32}
const celsius = [ -15 , -5, 0, 10 , 16 , 20 , 24 , 32];
var fahrenheit = celsius.map(toFahrenheit);

console.log(fahrenheit);