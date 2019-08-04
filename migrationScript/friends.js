import { createPool } from 'mysql2/promise';

require('dotenv').config();

const sqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.USER_HERE,
  password: process.env.DB_PASS,
  connectionLimit: 10,
  queueLimit: 0,
};
const pool1 = createPool(sqlConfig);
async function createDatabase() {
  await pool1.execute(`create database IF NOT EXISTS ${process.env.db}`);
  console.log('delete id Exists');
}

const sqlConfig1 = {
  host: process.env.DB_HOST,
  user: process.env.USER_HERE,
  password: process.env.DB_PASS,
  database: process.env.db,
  connectionLimit: 10,
  queueLimit: 0,
};
const pool = createPool(sqlConfig1);

async function deleteTable() {
  await pool.query(' DROP TABLE IF EXISTS friendRequest ');
  console.log('delete tables because it is already present in db');
}

async function createTable() {
  console.log('creating table');
  await pool.execute('CREATE TABLE friendRequest(senderId varchar(100) NOT NULL, receiverId varchar(100) NOT NULL, senderFirstName varchar(100) NOT NULL, senderSurname varchar (100) NOT NULL, status varchar(100) NOT NULL,receiverFirstName varchar(100) NOT NULL, receiverSurname varchar (100) NOT NULL, senderImage varchar(100), receiverImage varchar(100))');
  // await pool.query(`insert into friends(userId,friendId) values('1','2')`);
  // await pool.query(`insert into friends(userId,friendId) values('1','3')`);
  // await pool.query(`insert into friends(userId,friendId) values('1','4')`);
  // await pool.query(`insert into friends(userId,friendId) values('2','1')`);
  // await pool.query(`insert into friends(userId,friendId) values('2','3')`);
  // await pool.query(`insert into friends(userId,friendId) values('3','1')`);
  // await pool.query(`insert into friends(userId,friendId) values('3','2')`);
  // await pool.query(`insert into friends(userId,friendId) values('4','1')`);
  await console.log('created');
}
async function script() {
  await createDatabase();
  await deleteTable();
  await createTable();
  pool.off();
}
script();
export default script;
