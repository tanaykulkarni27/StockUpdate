
const server = require('express')();
const {home,Specific} = require('./urls');
server.get("/",home);
server.get('/view/:id',Specific);
server.listen(3000);

