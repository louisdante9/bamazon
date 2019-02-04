var mysql = require('mysql');
const info = require('console-info');
const warn = require('console-warn');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bamazon"
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
const purchaseItem = ({ item_id, quantity }) => {
    db.query(`SELECT * FROM products WHERE item_id = ${item_id}`, (err, items)=> {
        if (err) throw err;
        const itemFound = JSON.parse(JSON.stringify(items))
      if (itemFound.length < 1) {
        warn('There seems to be no item with the entered id');
        return;
      }
      else if(itemFound && (itemFound[0].stock_quantity - quantity) < 0) {
        warn('Insufficient quantity!');
        return
      } else {
          const stock = itemFound[0].stock_quantity - quantity
         
        var sql = `UPDATE products SET stock_quantity = ${stock} WHERE item_id = ${item_id}`;
        db.query(sql, (err, result) => {
            if (err) {
              console.log(err)
            }
            info('Purchase was successfully');
            info('you just purchased this item:' , itemFound[0])
        })
      }
    })
}

const getProducts = async() => {
    db.query("SELECT * FROM products", function (err, results, fields) {
        if (err) throw err;
        const products = results.map((result)=> ({
            item_id: result.item_id,
            product_name: result.product_name,
            price: result.price
        }))
        console.log(products);
      });
  }

  module.exports = {
    getProducts,
    purchaseItem
  }