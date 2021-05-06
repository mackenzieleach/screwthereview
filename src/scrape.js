require('dotenv').config()
const axios = require('axios');

const baseURL = "https://api.yelp.com/v3/businesses/search";
const descURL = "https://www.yelp.com/biz/"; // TBD, this could change

// PASSED IN FROM ROULETTE OR SEARCH
const loc = "Seattle"
const category="restaurants"
const price = "4" // Any price can be 1 or 2 or 3 or 4, or any comma-separated list of multiple prices (e.g "1,2,3")

// Server Vars
const http = require('http');
const port = 7000

const server = http.createServer(function(req, response) {
    response.writeHead(200, {'Content-Type': 'text/json'});
    var URL = constructURL([category], loc, price);
    console.log("Getting business from " + URL)
    const experience = getExperience(URL);
    // console.log(experience);
    experience.then( (value) => { console.log("Value " + value)} )
    response.end();
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
function constructURL(categories, loc, price){
    var URL = baseURL + "?location=" + loc

    if (categories && categories.length >= 1){
        URL = URL + "&categories=" + categories[0]
        for (var i = 1; i < categories.length; i++){
            URL = URL + "," + categories[i]
        }
    }

    if (price) {
        URL = URL + "&price=" + price
    }
    return URL;
}

async function getExperience(searchURL){
    const businesses = await axios.get(searchURL, {
        headers: {
            'Authorization' : 'Bearer ' + process.env.YELP_API_KEY
        }
    }).then(
        (response) => {
            var randomNum = Math.floor(Math.random() * response.data.businesses.length)
            var randomBiz = response.data.businesses[randomNum]
            console.log(randomBiz)
            //TODO: Append Business Description and Hours to business
            // var bizDescription = scrapeDescription(randomBiz.id)
            // randomBiz.push({
            //     description: bizDescription
            // });
            return randomBiz;
        },
        (error) => {
            console.log(error);
        }
    );
}

// Scrapes description and hours from Yelp business page
async function scrapeDescription(id){
    let response = await axios(descURL + id).catch((err) => console.log(err));

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

