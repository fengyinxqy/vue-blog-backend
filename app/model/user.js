const { v4: uuidv4 } = require('uuid');

module.exports = app => {
  const { STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: STRING, primaryKey: true, defaultValue: uuidv4 },
    username: STRING(50),
    password: STRING(100),
  });

  return User;
};
