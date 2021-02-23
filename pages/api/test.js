const fetch = require("node-fetch");

export default (req, res) => {
  let city = req.query.city;
  let apiKey = process.env.OpenWeatherKey;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let temperature = data.main.temp;
      res.statusCode = 200;
      res.json({ temperature });
    })
    .catch((err) => {
      res.status(404).json({
        status: 404,
        message: "City Not Found"
      });
    });

  /*
  request(url, function (err, response, body) {
    if (err) {
      return res.status(404).json({
        status: 404,
        message: "City Not Found"
      });
    } else {
      let weather = JSON.parse(body);
      let message = weather.main.temp;
      console.log(message);
      res.statusCode = 200;
      res.json(message);
    }
  });
  */
};
