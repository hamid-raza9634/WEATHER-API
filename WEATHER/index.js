function weatherapi(){
     country_name = document.getElementById("cityInput").value
      console.log(country_name)
     axios.get(`https://api.weatherapi.com/v1/current.json?key=3bf758febe054669966111302260108&q=${country_name}&aqi=yes`)
     .then((response)=>{
      console.log(response)
      document.getElementById("abc1").innerHTML = `TEMPERATURE: ${response.data.current.temp_c}°C`
      document.getElementById("abc2").innerHTML = `LOCATION: ${response.data.location.name}`
      document.getElementById("abc3").innerHTML = `HUMIDITY: ${response.data.current.humidity}%`
      document.getElementById("abc4").innerHTML = `WIND SPEED: ${response.data.current.wind_kph} km/h`
      })
    .catch((error)=>{
     console.log(error)
    })
}