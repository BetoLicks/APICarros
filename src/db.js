const mysql = require('mysql');
const connection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   pass: process.env.DB_PASS,
   db: process.env.DB_NAME 
});

connection.connect((error)=>{
   if (error){throw error};
   console.log('BANCO CONECTADO');
})

module.exports = connection;