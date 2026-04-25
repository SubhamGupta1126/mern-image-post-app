const app = require('./src/app');
const connectDB = require('./src/db/db');

const dns = require('dns');
dns.setServers(['8.8.8.8']);

connectDB().then(()=>{
    app.listen(3000,()=>{
    console.log("Server is connected on port 3000");
    })
})
