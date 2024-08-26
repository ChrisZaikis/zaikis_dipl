const Category = require("../models/CategoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      return res.status(400).json({ error: "Category input is required" });
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const categoryCreated = await Category.create({ name: category });
    res.status(201).json({ categoryCreated });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const categoryName = decodeURIComponent(req.params.category);
    if (categoryName !== "Choose category") {
      const categoryExists = await Category.findOne({
        name: categoryName,
      }).orFail();
      await categoryExists.remove();
      res.json({ categoryDeleted: true });
    } else {
      res.status(400).json({ error: "Invalid category name" });
    }
  } catch (err) {
    next(err);
  }
};

const saveAttr = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body;
  if (!key || !val || !categoryChoosen) {
    return res.status(400).json({ error: "All inputs are required" });
  }

  try {
    const category = categoryChoosen.split("/")[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();

    let keyExistsInDatabase = false;
    categoryExists.attrs.forEach((item, idx) => {
      if (item.key === key) {
        keyExistsInDatabase = true;
        const newAttributeValues = [
          ...new Set([...categoryExists.attrs[idx].value, val]),
        ];
        categoryExists.attrs[idx].value = newAttributeValues;
      }
    });

    if (!keyExistsInDatabase) {
      categoryExists.attrs.push({ key: key, value: [val] });
    }

    await categoryExists.save();
    const updatedCategories = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdated: updatedCategories });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
