import Employee from "../model/employee.model.js";
import Asset from "../model/asset.model.js";
import issueAssetModel from "../model/issueAsset.model.js";


export const getReturnPage = async (req, res) => {
  try {
    const issuedAssets = await issueAssetModel.findAll({
      where: {
        status: "ISSUED"
      },
      include: [
        Employee,
        Asset
      ]
    });
    res.render("returnAsset/add", {
      issuedAssets
    });
  } catch (error) {
    console.log(error);
  }
}


export const returnAsset = async (req, res) => {
  try {
    const {
      transactionId,
      returnDate,
      reason
    } = req.body;
    const transaction = await issueAssetModel.findByPk(transactionId);
    await transaction.update({
      returnDate,
      reason,
      status: "RETURNED"
    });
    await Asset.update({
      status: "IN_STOCK"
    }, {
      where: {
        id: transaction.assetId
      }
    });
    res.redirect("/returnAsset");
  } catch (error) {
    console.log(error);
  }
}

export const getReturnedAssets = async (req, res) => {
  const returnedAssets = await issueAssetModel.findAll({
    where: {
      status: "RETURNED"
    },
    include: [
      Employee,
      Asset
    ]
  });
  res.render("returnAsset/index", {
    returnedAssets
  });

}