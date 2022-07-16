import { DataTypes } from 'sequelize';
import database from '../database/connections';

const User = database.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.BOOLEAN, allowNull: false },
});

export default User;
