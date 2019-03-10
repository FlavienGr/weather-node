const request = require("request");
const key = process.env.DARK_SKY_KEY;

getLocalForecast = (longitude, latitude, callback) => {
  const urlForecast = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si`;
  request({ url: urlForecast, json: true }, (error, res, body) => {
    if (error) {
      callback("unable to connect to weather service", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    }
    if (res.statusCode === 200) {
      const { precipProbability, temperature, summary } = body.currently;
      callback(
        undefined,
        `${summary}. It is currently ${temperature} degrees. There is ${precipProbability}% of chance to rain.`
      );
    }
  });
};

module.exports = getLocalForecast;
