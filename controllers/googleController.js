// Make functions here. They will need to be exported.
const axios = require("axios");

module.exports = {
    // back end functions go here to send requests to the Google API
    getBooks:(req, res) => {
        // axios.get()
        res.json("hello from the backend");
    }
}