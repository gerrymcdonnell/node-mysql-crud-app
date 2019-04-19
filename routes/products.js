const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
  });
   

//route for homepage
router.get('/',(req, res) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('product_view',{
        results: results
      });
    });
  });
   
  //route for insert data
  router.post('/save',(req, res) => {

    console.log('req= ',req.body);

    /*let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    let sql = "INSERT INTO product SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });*/

  });
   
  //route for update data
  router.post('/update',(req, res) => {
    let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
      if(err) {
        console.log("Update Error:",err);
        throw err;
    }
      res.redirect('/');
    });
  });
   
  //route for delete data
  router.post('/delete',(req, res) => {
    let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/');
    });
  });

  module.exports=router;