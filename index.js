
const server = require('express')();
const {home,Specific} = require('./urls');
const port = process.env.PORT || 3001;
server.get("/",home);
server.get('/view/:id',Specific);
server.listen(port);

