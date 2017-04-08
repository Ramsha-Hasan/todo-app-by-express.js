var express = require('express');
var todo = require('./Controllers/todo')
var app = express();

//setting up view engine
app.set ('view engine','ejs');
app.set('views', __dirname +'/views');

//for static files
app.use(express.static('./public'));

//fire controllers
todo(app);

//listen to port
app.listen(3000);
console.log('Serve has started');