const apiKey = "YOUR_API_KEY";


function getWeather() {

    let city = document.getElementById("city").value;


    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}'
    )


        .then(response => response.json())

        .then(data => {


            document.getElementById("cityName").innerHTML =
                data.name;


            document.getElementById("temperature").innerHTML =
                data.main.temp + "°C";


            document.getElementById("condition").innerHTML =
                data.weather[0].description;


            document.getElementById("humidity").innerHTML =
                data.main.humidity + "%";


            document.getElementById("wind").innerHTML =
                data.wind.speed + " km/h";


        })

        .catch(() => {

            alert("City not found");

        });


}