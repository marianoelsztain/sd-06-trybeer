const connection = require('../../model/connection');

const createDataBase = () => {
  return 'CREATE DATABASE IF NOT EXISTS Trybeer;';
}

const createTableUsers = () => {
  const createTableUsers = `
                            CREATE TABLE Trybeer.users (
                              id INT NOT NULL AUTO_INCREMENT,
                                name VARCHAR(100) NOT NULL,
                                email VARCHAR(100) NOT NULL,
                                password VARCHAR(20) NOT NULL,
                                role VARCHAR(20) NOT NULL,
                                PRIMARY KEY (id),
                                UNIQUE KEY \`email_un\` (email));`
  return createTableUsers;
}

const createTableSales = () => {
  const createTableSales = `CREATE TABLE Trybeer.sales (
                              id INT NOT NULL AUTO_INCREMENT,
                              user_id INT NOT NULL,
                              total_price DECIMAL(9,2) NOT NULL,
	                            delivery_address VARCHAR(100) NOT NULL,
	                            delivery_number VARCHAR(50) NOT NULL,
	                            sale_date DATETIME NOT NULL,
                              status VARCHAR(50) NOT NULL,
                              PRIMARY KEY(id),
                              FOREIGN KEY (user_id) REFERENCES users(id));`
  return createTableSales;
}

const createTableProducts = () => {
  const createTableProducts = `CREATE TABLE Trybeer.products (
                              id INT NOT NULL AUTO_INCREMENT,
                              name VARCHAR(100) NOT NULL,
                              price DECIMAL(4,2) NOT NULL,
                              url_image VARCHAR(200) NOT NULL DEFAULT '',
                              PRIMARY KEY(id),
                              UNIQUE KEY \`name\`(name));`
  return createTableProducts;
}

const createTableSalesProducts = () => {
  const createTableSalesProducts = `CREATE TABLE Trybeer.sales_products (
                                      sale_id INT NOT NULL,
                                      product_id INT NOT NULL,
                                      quantity VARCHAR(10) NOT NULL,
                                      PRIMARY KEY(sale_id, product_id),
                                      FOREIGN KEY(sale_id) REFERENCES sales(id),
                                      FOREIGN KEY(product_id) REFERENCES products(id));`
  return createTableSalesProducts;
}

const insertUsers = () => {
  const insertUsers = `INSERT INTO Trybeer.users (id, name, email, password, role)
                        VALUES
                          ('1', 'Tryber Admin', 'tryber@trybe.com.br', '123456', 'administrator'),
                          ('2', 'Bruno Silva Batista', 'bruno.batista@gmail.com', '12345678', 'client');`
  return insertUsers;
}

const insertProducts = () => {
  const insertProducts = `INSERT INTO Trybeer.products (id, name, price, url_image)
                        VALUES
                          ('1','Skol Lata 250ml',2.20, 'http://localhost:3001/images/Skol Lata 350ml.jpg'),
                          ('2','Heineken 600ml',7.50, 'http://localhost:3001/images/Heineken 600ml.jpg'),
                          ('3','Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg'),
                          ('4','Brahma 600ml',7.50, 'http://localhost:3001/images/Brahma 600ml.jpg'),
                          ('5','Skol 269ml',2.19, 'http://localhost:3001/images/Skol 269ml.jpg'),
                          ('6','Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/Skol Beats Senses 313ml.jpg'),
                          ('7','Becks 330ml',4.99, 'http://localhost:3001/images/Becks 330ml.jpg'),
                          ('8','Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/Brahma Duplo Malte 350ml.jpg'),
                          ('9','Becks 600ml',8.89, 'http://localhost:3001/images/Becks 600ml.jpg'),
                          ('10','Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/Skol Beats Senses 269ml.jpg'),
                          ('11','Stella Artois 275ml',3.49, 'http://localhost:3001/images/Stella Artois 275ml.jpg');`
  return insertProducts;
}

const createAndInsertsDataBase = async () => {
  await connection.execute('DROP DATABASE IF EXISTS Trybeer;');
  await connection.execute(createDataBase());
  await connection.execute(createTableUsers());
  await connection.execute(createTableSales());
  await connection.execute(createTableProducts());
  await connection.execute(createTableSalesProducts());
  await connection.execute(insertUsers());
  await connection.execute(insertProducts());
}

const dropAndTruncateDataBase = async () => {
  await connection.execute('DELETE FROM Trybeer.sales_products;');
  await connection.execute('ALTER TABLE Trybeer.sales_products AUTO_INCREMENT = 1;');
  await connection.execute('DELETE FROM Trybeer.sales;');
  await connection.execute('ALTER TABLE Trybeer.sales AUTO_INCREMENT = 1;');
  await connection.execute('DELETE FROM Trybeer.products;');
  await connection.execute('ALTER TABLE Trybeer.products AUTO_INCREMENT = 1;');
  await connection.execute('DELETE FROM Trybeer.users;');
  await connection.execute('ALTER TABLE Trybeer.users AUTO_INCREMENT = 1;');
}

module.exports = {
  createDataBase,
  createTableUsers,
  createTableSales,
  createTableProducts,
  createTableSalesProducts,
  insertUsers,
  insertProducts,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
};
