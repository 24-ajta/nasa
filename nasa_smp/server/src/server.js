const http = require('http');

require('dotenv').config();//to take env files


const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
})