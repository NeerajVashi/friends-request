import pool from '../config/sqlPool';

async function createTestData() {
  await pool.query('drop table IF EXISTS authorObject');
  await pool.query('create table authorObject ( authorId int auto_increment, title varchar(250), authorImage varchar(250), content varchar(250), primary key (authorId))');
  await pool.query(`insert into authorObject(title,authorImage,content) values('Ankit', 'Ankit.jpg','Author ankit')`);
  await pool.query(`insert into authorObject(title,authorImage,content) values('Vivek','Vivek.jpg','Author vivek')`);
  await pool.query(`insert into authorObject(title,authorImage,content) values('Nikhil','Nikhil.jpg','Author Nikhil')`);

  await pool.query('drop table IF EXISTS bookObject');
  await pool.query('create table bookObject ( id int auto_increment primary key, bookName varchar(250), author varchar(250), content varchar(250),isbn varchar(250),images varchar(250),authorId int)');
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('First book', 'Vivek' , '123'  , 'First'  , 'This is first book', '1')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Second book',  'Ankit'  ,'234'  , 'second'  ,'This is second book', '2')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Third book'  , 'Nikhil' , '345'  , 'Third'  , 'This is third book'  , '3')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('First book', 'Vivek' , '123'  , 'First'  , 'This is first book', '1')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Second book',  'Ankit'  ,'234'  , 'second'  ,'This is second book', '2')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Third book'  , 'Nikhil' , '345'  , 'Third'  , 'This is third book'  , '2')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('First book', 'Vivek' , '123'  , 'First'  , 'This is first book', '2')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Second book',  'Ankit'  ,'234'  , 'second'  ,'This is second book', '1')`);
  await pool.query(`insert into bookObject (bookName, author, isbn, images, content, authorId) values('Third book'  , 'Nikhil' , '345'  , 'Third'  , 'This is third book'  , '3')`);
}

createTestData();
// module.exports = createTestData;
