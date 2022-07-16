import { Sequelize } from 'sequelize';

const database = new Sequelize('node', 'root', '9876543210', {
  host: 'localhost',
  dialect: 'mysql',
});

export default database;
