import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Asset = sequelize.define("Asset", {
  assetCode: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  serialNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  purchaseDate: {
    type: DataTypes.DATEONLY,
  },

  purchaseCost: {
    type: DataTypes.DECIMAL(10, 2),
  },

  status: {
    type: DataTypes.ENUM("IN_STOCK", "ISSUED", "DAMAGED", "SCRAPPED"),
    defaultValue: "IN_STOCK",
  },

  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  scrapDate: {
    type: DataTypes.DATEONLY,
  },

  scrapReason: {
    type: DataTypes.STRING,
  },

  branch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Asset;
