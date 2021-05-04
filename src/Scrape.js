const axios = require('axios');
const searchURL = "https://www.yelp.com/search";
const descURL = "https://www.yelp.com/biz/";
const loc = "Seattle"
const category="restaurants"

search(searchURL, loc, category).then( (res) => {
    // ? find_desc=Restaurants & find_loc=Sacramento
    const html = res.data;
    console.log($('[class^="business"]').get());
});

async function search(searchURL, loc, category){
    console.log("Making initial search")
    // make http call to url
    let response = await axios(searchURL + "?find_desc=" + category + "&find_loc=" + loc).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}


// fetchData(url).then( (res) => {
//     const html = res.data;
//     const $ = cheerio.load(html);
//     const statsTable = $('.table.table-bordered.table-hover.downloads > tbody > tr');
//     statsTable.each(function() {
//         let title = $(this).find('td').text();
//         console.log(title);
//     });
// })

// async function fetchData(url){
//     console.log("Scraping description")
//     // make http call to url
//     let response = await axios(url).catch((err) => console.log(err));

//     if(response.status !== 200){
//         console.log("Error occurred while fetching data");
//         return;
//     }
//     return response;
// }