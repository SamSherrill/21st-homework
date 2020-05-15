// Make functions here. They will need to be exported.
const axios = require("axios");

// query URL :https://www.googleapis.com/books/v1/volumes?q=search+terms
// documentation here: https://developers.google.com/books/docs/v1/using#PerformingSearch

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

module.exports = {
    // back end functions go here to send requests to the Google API
    getBooks:(req, res) => {
        // axios.get()
        res.json("hello from the backend");
    }
}