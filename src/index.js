var http = require('http'); 
const express = require('express');
const routes = require('./routes')
const app = express();

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

require('./database')
app.use(require("cors")());

app.use(express.json());
app.use(routes);
 
var server = http.createServer(app); 
server.listen(process.env.PORT || 3060);
console.log("Servidor escutando ")
