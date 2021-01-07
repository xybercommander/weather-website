function temp_slicer (temp) {
    return Math.floor(temp);
}


var button = document.querySelector('.button');
var input_text = document.querySelector('.input-text');
var place = document.querySelector('.location-name');


// The Week Days
var day1 = document.querySelector('.d1');
var day2 = document.querySelector('.d2');
var day3 = document.querySelector('.d3');
var day4 = document.querySelector('.d4');
var day5 = document.querySelector('.d5');
var day6 = document.querySelector('.d6');
var day7 = document.querySelector('.d7');


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
    'Light shower rain': 'fas fa-cloud-rain',
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


// Background Images
var background_images = {
    'Thunderstorm with light rain': '/WeatherWebpage/bgImages/rain.jpg',
    'Thunderstorm with rain': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Thunderstorm with heavy rain': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Thunderstorm with light drizzle': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Thunderstorm with drizzle': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Thunderstorm with heavy drizzle': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Thunderstorm with Hail': 'https://www.desktopbackground.org/download/o/2010/04/10/29_ultra-hd-4k-rain-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
    'Light Drizzle': 'https://wallpaperaccess.com/full/134824.jpg',
    'Drizzle': 'https://wallpaperaccess.com/full/134824.jpg',
    'Heavy Drizzle': 'https://wallpaperaccess.com/full/134824.jpg',
    'Light rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Moderate rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Heavy rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Freezing rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Light shower rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Shower rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Heavy shower rain': 'https://wallpaperaccess.com/full/134824.jpg',
    'Light snow': 'https://wallpaperaccess.com/full/419115.jpg',
    'Snow': 'https://wallpaperaccess.com/full/419115.jpg',
    'Heavy Snow': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Mix snow/rain': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Sleet': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Heavy sleet': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Snow shower': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Heavy snow shower': 'https://papers.co/wallpaper/papers.co-ns40-snow-night-sky-star-space-nature-35-3840x2160-4k-wallpaper.jpg',
    'Flurries': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Mist': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Smoke': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Haze': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Sand/dust': 'https://www.teahub.io/photos/full/194-1940234_nature-mountain-eagle-fog-landscape-ultrahd-4k-wallpaper.jpg',
    'Fog': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Freezing Fog': 'https://i.pinimg.com/originals/e0/57/44/e05744161d7500a183d5ec3a38a6e626.jpg',
    'Clear Sky': 'https://www.pixel4k.com/wp-content/uploads/2018/10/sea-moon-clear-sky-nature-4k_1540132869.jpg',
    'Few clouds': 'https://wallpapercave.com/wp/wp2394254.jpg',
    'Scattered clouds': 'https://wallpapercave.com/wp/wp2394254.jpg',
    'Broken clouds': 'https://www.teahub.io/photos/full/177-1778663_anime-landscape-sky-clouds.png',
    'Overcast clouds': 'https://www.teahub.io/photos/full/177-1778663_anime-landscape-sky-clouds.png',
    'Unknown Precipitation': 'https://wallpaperaccess.com/full/134824.jpg',
}



var date = new Date();
var today = date.getDay();
var weekday = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

var week_Day = [];
for(let i = today; i < 8; i++) {
    week_Day.push(i);
}
for(let i = 1; i < today; i++) {
    week_Day.push(i);
}

var today_date = date.getDate();
var day1_date = '';
if(today_date == 1 || today_date == 21 || today_date == 31) {
    day1_date += today_date + 'st';
} else if(today_date == 2 || today_date == 22) {
    day1_date += today_date + 'nd';
} else if(today_date == 3 || today_date == 23) {
    day1_date += today_date + 'rd';
} else {
    day1_date += today_date + 'th';
}


// THE BUTTON FUNCTION //

button.addEventListener('click', () => {


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
            let mintemp1 = temp_slicer(data['data']['0']['app_min_temp']).toString();
            let maxtemp1 = temp_slicer(data['data']['0']['app_max_temp']).toString();
            min_max_1.innerText = mintemp1 + "°\xa0\xa0\xa0\xa0/\xa0\xa0\xa0\xa0" + maxtemp1 + "°";
            day1.innerText = weekday[week_Day[0]] + ', ' + day1_date;

            // Setting the Background Image // 
            document.body.style.backgroundImage = `url('${background_images[data['data']['0']['weather']['description']]}')`


            // Day2
            let mintemp2 = temp_slicer(data['data']['1']['app_min_temp']).toString();
            let maxtemp2 = temp_slicer(data['data']['1']['app_max_temp']).toString();
            min_max_2.innerText = mintemp2 + "°\xa0\xa0/\xa0\xa0" + maxtemp2 + "°";
            day2.innerText = weekday[week_Day[1]].slice(0, 3);

            // Day3
            let mintemp3 = temp_slicer(data['data']['2']['app_min_temp']).toString();
            let maxtemp3 = temp_slicer(data['data']['2']['app_max_temp']).toString();
            min_max_3.innerText = mintemp3 + "°\xa0\xa0/\xa0\xa0" + maxtemp3 + "°";
            day3.innerText = weekday[week_Day[2]].slice(0, 3);

            // Day4
            let mintemp4 = temp_slicer(data['data']['3']['app_min_temp']).toString();
            let maxtemp4 = temp_slicer(data['data']['3']['app_max_temp']).toString();
            min_max_4.innerText = mintemp4 + "°\xa0\xa0/\xa0\xa0" + maxtemp4 + "°";
            day4.innerText = weekday[week_Day[3]].slice(0, 3);

            // Day5
            let mintemp5 = temp_slicer(data['data']['4']['app_min_temp']).toString();
            let maxtemp5 = temp_slicer(data['data']['4']['app_max_temp']).toString();
            min_max_5.innerText = mintemp5 + "°\xa0\xa0/\xa0\xa0" + maxtemp5 + "°";
            day5.innerText = weekday[week_Day[4]].slice(0, 3);

            // Day6
            let mintemp6 = temp_slicer(data['data']['5']['app_min_temp']).toString();
            let maxtemp6 = temp_slicer(data['data']['5']['app_max_temp']).toString();
            min_max_6.innerText = mintemp6 + "°\xa0\xa0/\xa0\xa0" + maxtemp6 + "°";
            day6.innerText = weekday[week_Day[5]].slice(0, 3);

            // Day7
            let mintemp7 = temp_slicer(data['data']['6']['app_min_temp']).toString();
            let maxtemp7 = temp_slicer(data['data']['6']['app_max_temp']).toString();
            min_max_7.innerText = mintemp7 + "°\xa0\xa0/\xa0\xa0" + maxtemp7 + "°";
            day7.innerText = weekday[week_Day[6]].slice(0, 3);
        })




        // API FOR CURRENT DATA
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_text.value}&appid=dc5256050d46fc16a6e32fdfc241d49c`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            var temperature = Math.floor(data['main']['temp'] - 273.15);
            temp1.innerText = temperature.toString() + "°";
        });

}) 