function searchCity() {
    let content = document.getElementById("content");
    let city = document.getElementById("cityName").value;

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=f51bcfb8b207b0ef58ce10da80b90477";

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
        })
        .then(function (json) {
            drawData(content, json);
        });

}

function drawData(content, json){

    let template = '<div class="name" id="name">{{name}}</div>\n' +
        '    <div class="temp" id="temp">{{main.temp}}°C</div>\n' +
        '    <div class="weather" id="weather">{{weather.0.main}}</div>\n' +
        '    <div class="wind" id="wind">Wind:</br> {{wind.speed}} meter/sec</div>\n' +
        '    <div class="humidity" id="humidity">Humidity:</br> {{main.humidity}}%</div>';

    if (json) {
        content.innerHTML += Mustache.render(template, json);
    }
}

