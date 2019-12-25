const fullExample = () => ({"coord":{"lon":73.4,"lat":61.25},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":-29,"feels_like":-34.26,"temp_min":-29,"temp_max":-29,"pressure":1012,"humidity":75},"visibility":10000,"wind":{"speed":2,"deg":300},"clouds":{"all":0},"dt":1577223563,"sys":{"type":1,"id":8987,"country":"RU","sunrise":1577247759,"sunset":1577267374},"timezone":18000,"id":1490624,"name":"Surgut","cod":200})

const dataExample = () => ({
    "city": {
        "coord": {
            "lat": 61.669,
            "lon": 50.835
        },
        "country": "RU",
        "id": 485239,
        "name": "Syktyvkar",
        "population": 230139,
        "sunrise": 1575697086,
        "sunset": 1575717481,
        "timezone": 10800
    },
    "cnt": 40,
    "cod": "200",
    "list": [
        {
            "clouds": {
                "all": 94
            },
            "dt": 1575730800,
            "dt_txt": "2019-12-07 15:00:00",
            "main": {
                "grnd_level": 980,
                "humidity": 98,
                "pressure": 998,
                "sea_level": 998,
                "temp": -0.4,
                "temp_kf": 0.04,
                "temp_max": -0.4,
                "temp_min": -0.44
            },
            "snow": {
                "3h": 0.5
            },
            "sys": {"pod": "n"},
            "weather": [
                {
                    "description": "light snow",
                    "icon": "13n",
                    "id": 600,
                    "main": "Snow"
                },
            ],
            "wind": {
                "deg": 210,
                "speed": 2.82
            }
        }
    ]
});

const formattedResponse = () => ({
    city: "Syktyvkar",
    temperature: "-0.4 C",
    humidity: "98 %",
    pressure: "998 hPa",
    wind: "2.82 meter/sec",
});

const errorExample = () => (
    {
        "status": 999,
        "data":
            {
                "message": "network error"
            }
    }
);

const errorResponse = () => (
    {
        "message": "network error"
    }
);

const nothingToGeocodeData = () => (
    {
        response: {
            cod: 400,
            message: "Nothing to geocode"
        }
    }
);

const cityNotFoundData = () => (
    {
        response: {
            cod: 404,
            message: "city not found"
        }
    }
);

const invalidApiKeyData = () => (
    {
        response: {
            cod: 401,
            message: "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        }
    }
);

const networkErrorData = () => (
    {
        status: 999,
        data: {
            message: "network error"
        }
    }
);

const networkErrorBody = () => (
    {
        request: true
    }
);
