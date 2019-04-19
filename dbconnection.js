const express = require('express');
const router = express.Router();
const mysql = require('mysql');


const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
  });

module.exports=conn;