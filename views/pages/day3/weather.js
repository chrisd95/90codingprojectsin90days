/*var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
console.log(button);

button.addEventListener('click', function(){
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value+ "&appid=f2e7b16a465b629e3bda1f1789f63eea")
    .then(response => response.json())
    .then(data => console.log(data))

  .catch(err => alert("Wrong city name!"))
})
*/

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');

var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f2e7b16a465b629e3bda1f1789f63eea')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  humidity.innerHTML = "Humidity:"+humidityValue+"%";
  pressure.innerHTML = "Pressure:"+pressureValue+"hPa";

  var intTemp = parseFloat(tempValue);
  intTemp = (intTemp*10 - 2731.5)/10;
  var textString = intTemp.toString();
  textString = textString.substr(0,4);
  temp.innerHTML = "Temperature - "+ textString +"°C" ;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
