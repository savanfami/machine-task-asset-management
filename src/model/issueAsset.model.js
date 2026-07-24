import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const AssetTransaction = sequelize.define("AssetTransaction", {

  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  issueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  returnDate: {
    type: DataTypes.DATEONLY
  },

  reason: {
    type: DataTypes.STRING
  },

  status: {
    type: DataTypes.ENUM("ISSUED", "RETURNED"),
    defaultValue: "ISSUED"
  }

});

export default AssetTransaction;