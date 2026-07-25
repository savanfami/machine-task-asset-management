import AssetModel from "../model/asset.model.js";

export const scrapAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const asset = await AssetModel.findByPk(id);
    if (!asset) {
      return res.status(404).send("asset not found");
    }
    if (asset.status === "SCRAPPED") {
      return res.status(400).send("asset already scrapped");
    }
    await asset.update({
      status: "SCRAPPED",
      scrapDate: new Date(),
      scrapReason: reason.trim(),
    });
    res.redirect("/assets");
  } catch (error) {
    console.log(errors);
  }
};


export const showScrapPage = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await AssetModel.findByPk(id);
    if (!asset) {
      return res.status(404).send("asset not found");
    }
    if (asset.status === "SCRAPPED") {
      return res.status(400).send("asset already scrapped");
    }
    res.render("scrapAsset/scrap", {
      asset,
    });
  } catch (err) {
    console.log(err)
  }
};
