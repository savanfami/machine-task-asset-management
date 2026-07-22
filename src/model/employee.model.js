import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  branch: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

export default Employee;