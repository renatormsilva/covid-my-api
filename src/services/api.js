const axios = require("axios");

const api = axios.create({
    baseURL: "https://covid19.mathdro.id/api"
}) 

module.exports = api;