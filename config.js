// var mysql = require('mysql');

// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "bamazon"
// });

// // connect to database
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to database');
// });

// /**
//  * @function  [getContactList]
//  * @returns [contactlist] contacts
//  */
// const getProducts = async(limit) => {
//     let query = "SELECT * FROM products";
//     const results = await db.quey(query)
//     try {
//         if (results) {
//             const products = results.map((result)=> ({
//                 item_id: result.item_id,
//                 product_name: result.product_name,
//                 price: result.price
//             }))
//             info(products);
//             info(`${products.length} matches`);
//         }
//     } catch (error) {
//        console.log(error) 
//     }

//     // .exec((err, payload) => {
//     //   assert.equal(null, err);
//     //   const contacts = payload.map(contact => ({ 
//     //     firstname: contact.firstname, 
//     //     lastname: contact.lastname, 
//     //     phone: contact.phone, 
//     //     email: contact.email }))
//     //   info(contacts);
//     //   info(`${contacts.length} matches`);
//     //   db.close();
//     // })
//   }

//   module.exports = {
//     getProducts
//   }