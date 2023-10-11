var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.weatherController.getWeather(req.query,res);
})


module.exports = router;