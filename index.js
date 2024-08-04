var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "bd3ed731803e326475a445074b6f0bdf";
document.getElementById('alert-btn').addEventListener('click', function() {
    alert('Temperature is greater than 48 degrees!');
  });

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description']; // Corrected the index
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`; // Corrected span closing tag
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;

            if (convertion(temperature) > 48) {
                document.getElementById('alert-btn').style.display = 'block';
              } else {
                document.getElementById('alert-btn').style.display = 'none';
              }
        })
        .catch(err => alert('You have enterd wrong city name'));
});
