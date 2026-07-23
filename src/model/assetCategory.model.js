import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const assetCategory = sequelize.define("assetCategory", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export default assetCategory;
