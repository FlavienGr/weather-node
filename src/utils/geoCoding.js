const request = require("request");
const token = process.env.MAP_BOX_TOKEN;

geoCoding = (city, callback) => {
  const urlGeocoder = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}&limit=1`;

  request({ url: urlGeocoder, json: true }, (err, res, body) => {
    if (err) {
      callback("unable to connect to geo service", undefined);
    } else if (body.features.length === 0) {
      callback("please change the name of the city", undefined);
    } else if (!err && res.statusCode === 200) {
      const longitude = body.features[0].center[0];
      const latitude = body.features[0].center[1];
      const location = body.features[0].place_name;
      callback(undefined, {
        longitude,
        latitude,
        location
      });
    }
  });
};
module.exports = geoCoding;
