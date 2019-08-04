import { createPool } from 'mysql2/promise';

require('dotenv').config();

const sqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.USER_HERE,
  password: process.env.DB_PASS,
  database: process.env.db,
  connectionLimit: 10,
  queueLimit: 0,
};
const pool = createPool(sqlConfig);
console.log(`Using database = ${process.env.db} `);
module.exports = pool;
