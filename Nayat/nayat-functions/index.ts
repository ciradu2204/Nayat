const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let port = 3000;
app.listen(port,()=>{
    console.log("Node is started and running in the port : "+port);
});
