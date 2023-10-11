"use strict";

var axios = require("axios");

const getWeather = (data,res) => {
    const params = {
        lat: data.latitude,
        lon: data.longitude,
        APPID: "0c2e3284fcc8a15f0f039eba6a9703c1"
      };
    axios.get("https://api.openweathermap.org/data/2.5/weather", { params })
        .then((response) => {
          if (response) {
            res.send({result: 200 , data: response.data})
          }
        })
        .catch((error) => {
          throw error
        })
}

module.exports = {
    getWeather
}