import Asset from "../model/asset.model.js";
import AssetCategory from "../model/assetCategory.model.js";
import Employee from "../model/employee.model.js";
import { Op } from 'sequelize';

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({
  where: {
    status: {
      [Op.ne]: 'SCRAPPED',
    },
  },
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
      branch
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
      branch
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
      branch
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
        branch
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

export const getStockView = async (req, res) => {
    try {
        const stocks = await Asset.findAll({
            attributes: [
                "branch",
                [fn("COUNT", col("id")), "assetCount"],
                [fn("SUM", col("purchaseCost")), "totalValue"]
            ],
            where: {
                status: "IN_STOCK"
            },
            group: ["branch"],
            raw: true
        });
        const totalValue = stocks.reduce(
            (sum, stock) => sum + Number(stock.totalValue),
            0
        );
        res.render("asset/stockView", {
            stocks,
            totalValue
        });
    } catch (err) {
       console.log(err)
    }
};