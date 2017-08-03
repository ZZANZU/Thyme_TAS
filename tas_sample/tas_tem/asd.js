while(1){
var sensor = require('node-dht-sensor');
 
var result = sensor.read(11, 7);
console.log( "temperature: %s, humidity: %s", result.temperature.toFixed(1), result.humidity.toFixed(1) );
 
for (var n in result) {
console.log(n + ": " + result[n]);

}}
