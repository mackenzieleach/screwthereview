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
        response.writeHead(200, {'Content-Type': 'text/json'});
        var URL = constructURL(req);
        // var URL = constructURL([category], loc, price);
        console.log("\n Getting business from " + URL)
        const experience = getExperience(URL);
        experience.then( (value) => {
                var randomNum = Math.floor(Math.random() * value.data.businesses.length);
                var randomBiz = value.data.businesses[randomNum];

                //TODO: Append Business Description and Hours to business
                var bizDescription = scrapeDescription(randomBiz);
                randomBiz["description"] = "Test Description"
                response.write(JSON.stringify(randomBiz));
                
                response.end();
            },
            (error) => {
                console.log(error);
            }
        );
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
function getExperience(searchURL){
    return axios.get(searchURL, {
        headers: {
            'Authorization' : 'Bearer ' + process.env.YELP_API_KEY
        }
    });
}

// Scrapes description and hours from Yelp business page
async function scrapeDescription(biz){
    let response = await axios(descURL + biz.id).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    };
    //TODO: parse description and hours here
    response = response.data
    // console.log(response)
    //hours table - Class contains OpenhoursOpenhoursrow
    //description - Class starts w 
    // $('[class^="business"]').get()
}

