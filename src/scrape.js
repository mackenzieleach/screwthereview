require('dotenv').config()
const axios = require('axios');

const baseURL = "https://api.yelp.com/v3/businesses/search";
const descURL = "https://www.yelp.com/biz/"; // TBD, this could change

// Server Vars
const http = require('http');
const port = 7000;

// Creates a server that responds with a JSON String representing a business
const server = http.createServer(function(req, response) {
    // req.headers.location, .categories{<CSV of valid Yelp categories>}, and .price
    if (!req.headers.location) {
        console.log("404 Error - no location provided")
        response.writeHead(404, "error");
        response.end();
    } else {
        var URL = constructURL(req);
        console.log("Getting business from " + URL)
        getExperience(URL, response);
    }
});

server.listen(port, function(error) {
    if (error) {
        console.log('Received error ', error);
    } else {
        console.log('Server listening on port ' + port);
    }
});

// Requires location parameter
// Optional category (array) and price (string) params
function constructURL(req){
    var URL = baseURL + "?location=" + req.headers.location

    if (req.headers.price) {
        URL = URL + "&price=" + req.headers.price
    }

    if (req.headers.categories){
        var cat_list = req.headers.categories.split(", ")
        URL = URL + "&categories=" + cat_list[0]
        for (var i = 1; i < cat_list.length; i++){
            URL = URL + "," + cat_list[i]
        }
    }

    return URL;
}

// Returns a new experience from the Yelp API
function getExperience(searchURL, response){
    axios.get(searchURL, {
        headers: {
            'Authorization' : 'Bearer ' + process.env.YELP_API_KEY
        }
    }).then(value => {
        var randomNum = Math.floor(Math.random() * value.data.businesses.length);
        var randomBiz = value.data.businesses[randomNum];
        if (!randomBiz){
            response.writeHead(404, {'Content-Type': 'text/json'});
            response.write("Unable to find experience. Loosen filter requirements and try again.");
            console.log("Unable to find experience. Client should loosen filter requirements and try again.")
        } else {
            response.writeHead(200, {'Content-Type': 'text/json'});
            console.log("Found business " + randomBiz.name)
            response.write(JSON.stringify(randomBiz));

            //TODO: Scrape and append Business Description and Hours to business
            var bizDescription = scrapeDescription(randomBiz);
            console.log("Scraped description: " + bizDescription.description)
            response.write(JSON.stringify(bizDescription))
        }
        response.end();
    }).catch(err => {
        if (err.response) {
            // client received an error response (5xx, 4xx)
            response.writeHead(err.response.status, "error from yelp");
            response.write("Yelp doesn't like your request. Try again. Remember, categories must be valid from Yelp and price must be an int between 1 and 4")
            console.log("Error from Yelp")
            console.log(err.response)
          } else if (err.request) {
            // client never received a response, or request never left
            response.writeHead(err.request, "error on request");
            // response.write("Yelp doesn't like your request. Try again. Remember, categories must be valid from Yelp and price must be an int between 1 and 4")
            console.log("Error sending request");
          } else {
            // anything else
            console.log("Unidentified error");
            console.log(err);
          }
          response.end();
    });;
}

// Scrapes description and hours from Yelp business page
function scrapeDescription(biz){
    // let scrape_response = await axios(descURL + biz.id).catch((err) => console.log(err));

    // if(scrape_response.status !== 200){
    //     console.log("Error occurred while fetching data");
    //     return;
    // };

    //TODO: parse description and hours here
    return {"description" : "Test Description"}
    // console.log(response)
    //hours table - Class contains OpenhoursOpenhoursrow
    //description - Class starts w 
    // $('[class^="business"]').get()
}

