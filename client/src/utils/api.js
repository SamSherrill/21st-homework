import axios from "axios";

// I can name the thing I want to export, then export it,
// example const api = {} then export the api
// OR just export an object and include them as methods

export default {
    apiCall: () => {
        return axios.get("/api/google")
    }
}