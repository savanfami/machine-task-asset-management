import AssetCategory from "../model/assetCategory.model.js";

export const getCategories = async (req, res) => {
  try {
    const categoryData = await AssetCategory.findAll();

    res.render("assetCategory/list", { categoryData });
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req, res) => {
  try {
    const categoryData = {
      ...req.body,
      status: req.body.status === "true",
    };

    await AssetCategory.create(categoryData);

    return res.redirect("/asset-category");
  } catch (error) {
    console.log(error);
  }
};

export const showEditPage = async (req, res) => {
  try {
    const category = await AssetCategory.findByPk(req.params.id);

    if (!category) {
      return res.status(404).send("category not found");
    }

    res.render("assetCategory/edit", { category });
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const categoryData = {
      ...req.body,
      status: req.body.status === "true",
    };

    await AssetCategory.update(categoryData, {
      where: { id: req.params.id },
    });

    return res.redirect("/asset-category");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await AssetCategory.destroy({
      where: { id: req.params.id },
    });

    return res.redirect("/asset-category");
  } catch (error) {
    console.log(error);
  }
};
