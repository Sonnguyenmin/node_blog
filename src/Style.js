const express = require('express');
const app = express();
const path = require("path"); 
const morgan = require('morgan');
const exphbs = require("express-handlebars"); 
const { engine } = require("express-handlebars"); 

//Http logger morgan
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.set("views", path.join(__dirname, "resource/views"));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000);