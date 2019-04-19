/**
 * npm install --save express mysql body-parser hbs
 * 
 * tut from http://mfikri.com/en/blog/nodejs-mysql-crud
 */

//import products route
const products = require('./routes/products');

//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();



//middleware for products url
app.use('/',products);
 
//Create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
 

 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});