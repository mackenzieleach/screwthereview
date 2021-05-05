// This class is a WIP exploration into using Google's places API instead of Yelps. This would only be a go if Yelp Descriptions prove to be like really really hard to scrape.

const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

client
  .places({
    params: {
      key : "",

    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });