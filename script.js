var container = document.querySelector('.container');
var button = document.querySelector('.button');
var input_text = document.querySelector('.input-text');

button.addEventListener('click', () => {
    // API for current Data
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_text.value}&appid=dc5256050d46fc16a6e32fdfc241d49c`)
        .then(response => response.json())
        .then(data => console.log(data));

    // API for 16 days
    // fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Kolkata&key=9cc4d396352649cab1e283fea41427fd`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
})