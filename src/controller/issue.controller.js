import Employee from "../model/employee.model.js";
import Asset from "../model/asset.model.js";
import AssetTransaction from "../model/issueAsset.model.js";

export const getIssuePage = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      where: {
        status: true,
      },
    });

    const assets = await Asset.findAll({
      where: {
        status: "IN_STOCK",
      },
    });

    res.render("issueAsset/add", {
      employees,
      assets,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/issueAsset/issue");
  }
};


export const issueAsset = async (req, res) => {
  try {
    const { employeeId, assetId, issueDate } = req.body;

    const asset = await Asset.findByPk(assetId);

    if (!asset || asset.status !== "IN_STOCK") {
      return res.send("Asset is not available.");
    }

    await AssetTransaction.create({
      employeeId,
      assetId,
      issueDate,
      status: "ISSUED",
    });

    await Asset.update(
      {
        status: "ISSUED",
      },
      {
        where: {
          id: assetId,
        },
      }
    );

    res.redirect("/issueAsset/issue");
  } catch (error) {
    console.log(error);
    res.redirect("/issueAsset/issue");
  }
};