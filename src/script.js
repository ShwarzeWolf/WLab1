function searchCity(){
    let city= document.getElementById("city").value;

    (async () => {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f51bcfb8b207b0ef58ce10da80b90477");
        let data = await response.text();
        alert(data);
    })()
}