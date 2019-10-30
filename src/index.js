function getWeatherForecast(event){
    let content = document.getElementById("content");

    clearForm(content);
    let city = event.target['cityName'].value;

    getData(city)
        .then((results) => {
                if (results["cod"] === 200)
                    drawData(content, results);
                else
                    createErrorMessage(content);
        })
}

function createErrorMessage(content){
    let warning = document.createElement("div");
    warning.className = "warning";
    warning.innerHTML = "Could not find city name";
    content.appendChild(warning);

}

function drawData(content, json) {
    let template = '<div class="name" id="name">{{name}}</div>\n' +
        '    <div class="temp" id="temp">{{main.temp}}°C</div>\n' +
        '    <div class="weather" id="weather">{{weather.0.main}}</div>\n' +
        '    <div class="wind" id="wind">Wind:</br> {{wind.speed}} meter/sec</div>\n' +
        '    <div class="humidity" id="humidity">Humidity:</br> {{main.humidity}}%</div>';

    if (json) {
        content.innerHTML += Mustache.render(template, json);
    }
}

function getData(city) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric"
        + "&appid=f51bcfb8b207b0ef58ce10da80b90477";

        return fetch(url)
            .then((response) => response.json())
}

function clearForm(content) {
    let search = document.getElementById("search");
    content.innerText = "";
    content.appendChild(search);
}




