import Asset from "../model/asset.model.js";
import AssetCategory from "../model/assetCategory.model.js";
import Employee from "../model/employee.model.js";

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({
      include: AssetCategory,
    });
    res.render("asset/index", { assets });
  } catch (error) {
    console.log(error);
  }
};

export const getAddAsset = async (req, res) => {
  try {
    const categories = await AssetCategory.findAll({
      where: {
        status: true,
      },
    });
    res.render("asset/add", { categories });
  } catch (error) {
    console.log(error);
  }
};


export const createAsset = async (req, res) => {
  try {
    const {
      assetCode,
      serialNumber,
      manufacturer,
      model,
      purchaseCost,
      purchaseDate,
      status,
      categoryId,
    } = req.body;

    const existingAsset = await Asset.findOne({
      where: {
        serialNumber,
      },
    });

    if (existingAsset) {
      return res.send("Asset with this serial number already exists.");
    }

    await Asset.create({
      assetCode,
      serialNumber,
      manufacturer,
      model,
      purchaseCost,
      purchaseDate,
      status,
      categoryId,
    });

    res.redirect("/assets");
  } catch (error) {
    console.log(error);
    res.redirect("/assets/add");
  }
};


export const getEditAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findByPk(id);
    const categories = await AssetCategory.findAll({
      where: {
        status: true,
      },
    });
    if (!asset) {
      return res.redirect("/assets");
    }
    res.render("asset/edit", {
      asset,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/assets");
  }
};

export const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      assetCode,
      serialNumber,
      manufacturer,
      model,
      purchaseCost,
      purchaseDate,
      categoryId,
      status,
    } = req.body;

    await Asset.update(
      {
        assetCode,
        serialNumber,
        manufacturer,
        model,
        purchaseCost,
        purchaseDate,
        categoryId,
        status,
      },
      {
        where: {
          id,
        },
      }
    );

    res.redirect("/assets");
  } catch (error) {
    console.log(error);
    res.redirect(`/assets/edit/${req.params.id}`);
  }
};


export const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;

    await Asset.destroy({
      where: {
        id,
      },
    });

    res.redirect("/assets");
  } catch (error) {
    console.log(error);
    res.redirect("/assets");
  }
};


export const getIssuedAssets = async (req, res) => {
  try {

    const issues = await AssetTransaction.findAll({
      include: [
        {
          model: Employee
        },
        {
          model: Asset
        }
      ]
    });
    res.render("issueAsset/index", {
      issues
    });

  } catch (error) {
    console.log(error);
  }
};