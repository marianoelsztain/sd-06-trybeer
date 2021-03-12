const connection = require('../connection/connection');

// Find All Users
const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
};

// VerifyUser
const verifyUser = async (email, password) => {
  const [users] = await connection
    .execute('SELECT * FROM Trybeer.users WHERE email = ? AND password = ?', [email, password]);

  return users;
};

// Create new user
const creteUser = async (name, email, password, role) => {
  const [users] = await connection
    .execute('INSERT INTO Trybeer.users (name, email, password, role) VALUES (?, ?, ?, ?)', 
    [name, email, password, role]);
  return users;
}; 

module.exports = {
  getAll,
  verifyUser,
  creteUser,
};