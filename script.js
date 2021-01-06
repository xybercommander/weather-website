var button = document.querySelector('.button');
var input_text = document.querySelector('.input-text');
var place = document.querySelector('.location-name');


// Grid Temperatures
var temp1 = document.querySelector('.temp1');
var min_max_1 = document.querySelector('.min-max1');
var min_max_2 = document.querySelector('.min-max2');
var min_max_3 = document.querySelector('.min-max3');
var min_max_4 = document.querySelector('.min-max4');
var min_max_5 = document.querySelector('.min-max5');
var min_max_6 = document.querySelector('.min-max6');
var min_max_7 = document.querySelector('.min-max7');


// Icon Ids
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var icon7 = document.getElementById("icon7");

// Icon Font Awesome Dictionary
var icon_images = {
    'Thunderstorm with light rain': 'fas fa-cloud-sun-rain',
    'Thunderstorm with rain': 'fas fa-cloud-sun-rain',
    'Thunderstorm with heavy rain': 'fas fa-cloud-showers-heavy',
    'Thunderstorm with light drizzle': 'fas fa-cloud-rain	',
    'Thunderstorm with drizzle': 'fas fa-cloud-rain',
    'Thunderstorm with heavy drizzle': 'fas fa-cloud-rain',
    'Thunderstorm with Hail': 'fas fa-cloud-showers-heavy',
    'Light Drizzle': 'fas fa-cloud-rain	',
    'Drizzle': 'fas fa-cloud-rain',
    'Heavy Drizzle': 'fas fa-cloud-sun-rain',
    'Light rain': 'fas fa-cloud-showers-heavy',
    'Moderate rain': 'fas fa-cloud-showers-heavy',
    'Heavy rain': 'fas fa-cloud-showers-heavy',
    'Freezing rain': 'fas fa-cloud-showers-heavy',
    'Light shower Rain': 'fas fa-cloud-rain',
    'Shower rain': 'fas fa-cloud-showers-heavy',
    'Heavy shower rain': 'fas fa-cloud-showers-heavy',
    'Light snow': 'far fa-snowflake	',
    'Snow': 'far fa-snowflake',
    'Heavy Snow': 'far fa-snowflake	',
    'Mix snow/rain': 'fas fa-cloud-showers-heavy',
    'Sleet': 'fas fa-snowflake',
    'Heavy sleet': 'fas fa-snowflake',
    'Snow shower': 'fas fa-snowflake',
    'Heavy snow shower': 'fas fa-snowflake',
    'Flurries': 'fas fa-wind',
    'Mist': 'fas fa-wind',
    'Smoke': 'fas fa-wind',
    'Haze': 'fas fa-wind',
    'Sand/dust': 'fas fa-wind',
    'Fog': 'fas fa-smog',
    'Freezing Fog': 'fas fa-smog',
    'Clear Sky': 'far fa-sun',
    'Few clouds': 'fas fa-cloud-sun',
    'Scattered clouds': 'fas fa-cloud-sun',
    'Broken clouds': 'fas fa-cloud-sun',
    'Overcast clouds': 'fas fa-cloud-sun',
    'Unknown Precipitation': 'fas fa-cloud-showers-heavy',
}




button.addEventListener('click', () => {

    // API FOR CURRENT DATA
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_text.value}&appid=dc5256050d46fc16a6e32fdfc241d49c`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            var temperature = data['main']['temp'] - 273.15;
            temp1.innerText = temperature.toString().slice(0, 2) + "°";
        });





    // API FOR 16 DAYS  
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${input_text.value}&key=9cc4d396352649cab1e283fea41427fd`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Location name
            place.innerText = data['city_name'].toString() + ", " + data['country_code'];

            // Icons
            icon1.className = icon_images[data['data']['0']['weather']['description']];
            icon2.className = icon_images[data['data']['1']['weather']['description']];
            icon3.className = icon_images[data['data']['2']['weather']['description']];
            icon4.className = icon_images[data['data']['3']['weather']['description']];
            icon5.className = icon_images[data['data']['4']['weather']['description']];
            icon6.className = icon_images[data['data']['5']['weather']['description']];
            icon7.className = icon_images[data['data']['6']['weather']['description']];

            // Day1
            let mintemp1 = data['data']['0']['app_min_temp'].toString().slice(0, 2);
            let maxtemp1 = data['data']['0']['app_max_temp'].toString().slice(0, 2);
            min_max_1.innerText = mintemp1 + "°\xa0\xa0\xa0\xa0/\xa0\xa0\xa0\xa0" + maxtemp1 + "°";

            // Day2
            let mintemp2 = data['data']['1']['app_min_temp'].toString().slice(0, 2);
            let maxtemp2 = data['data']['1']['app_max_temp'].toString().slice(0, 2);
            min_max_2.innerText = mintemp2 + "°\xa0\xa0/\xa0\xa0" + maxtemp2 + "°";

            // Day3
            let mintemp3 = data['data']['2']['app_min_temp'].toString().slice(0, 2);
            let maxtemp3 = data['data']['2']['app_max_temp'].toString().slice(0, 2);
            min_max_3.innerText = mintemp3 + "°\xa0\xa0/\xa0\xa0" + maxtemp3 + "°";

            // Day4
            let mintemp4 = data['data']['3']['app_min_temp'].toString().slice(0, 2);
            let maxtemp4 = data['data']['3']['app_max_temp'].toString().slice(0, 2);
            min_max_4.innerText = mintemp4 + "°\xa0\xa0/\xa0\xa0" + maxtemp4 + "°";

            // Day5
            let mintemp5 = data['data']['4']['app_min_temp'].toString().slice(0, 2);
            let maxtemp5 = data['data']['4']['app_max_temp'].toString().slice(0, 2);
            min_max_5.innerText = mintemp5 + "°\xa0\xa0/\xa0\xa0" + maxtemp5 + "°";

            // Day6
            let mintemp6 = data['data']['5']['app_min_temp'].toString().slice(0, 2);
            let maxtemp6 = data['data']['5']['app_max_temp'].toString().slice(0, 2);
            min_max_6.innerText = mintemp6 + "°\xa0\xa0/\xa0\xa0" + maxtemp6 + "°";

            // Day7
            let mintemp7 = data['data']['6']['app_min_temp'].toString().slice(0, 2);
            let maxtemp7 = data['data']['6']['app_max_temp'].toString().slice(0, 2);
            min_max_7.innerText = mintemp7 + "°\xa0\xa0/\xa0\xa0" + maxtemp7 + "°";
        })
}) 