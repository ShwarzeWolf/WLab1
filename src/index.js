document.getElementById("search").addEventListener("submit", getWeatherForecast);

function getWeatherForecast(event){
    event.preventDefault();
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
    let template = document.getElementById("errorTemplate").innerHTML;
    content.innerHTML += Mustache.render(template, {"message" : "Could nor find a sity"});
}

function drawData(content, json) {
    let template = document.getElementById("dataTemplate").innerHTML;
    content.innerHTML += Mustache.render(template, json);
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
    content.innerText = "";
}