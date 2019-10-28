function searchCity(){
    let city= document.getElementById("city").value;

    (async () => {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f51bcfb8b207b0ef58ce10da80b90477");
        let data = await response.json();

        let dataToDraw = new Map;

        dataToDraw.set("generalDescription", data['weather'][0]['description']);
        dataToDraw.set("temperature", data['main']['temp']);
        dataToDraw.set("pressure", data['main']['pressure']);
        dataToDraw.set("humidity", data['main']['humidity']);
        dataToDraw.set("windSpeed", data['wind']['speed']);
        dataToDraw.set("clouds", data['clouds']['all']);
    }
    )()
}