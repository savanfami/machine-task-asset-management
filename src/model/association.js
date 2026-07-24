import Asset from "./asset.model.js";
import AssetCategory from "./assetCategory.model.js";
import Employee from "./employee.model.js";
import AssetTransaction from "./issueAsset.model.js";

Asset.belongsTo(AssetCategory, {
  foreignKey: "categoryId",
});

AssetCategory.hasMany(Asset, {
  foreignKey: "categoryId",
});

AssetTransaction.belongsTo(Employee, {
  foreignKey: "employeeId"
});

Employee.hasMany(AssetTransaction, {
  foreignKey: "employeeId"
});

AssetTransaction.belongsTo(Asset, {
  foreignKey: "assetId"
});

Asset.hasMany(AssetTransaction, {
  foreignKey: "assetId"
});