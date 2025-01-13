const categoryService = require("../services/categoryService");

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.addCategory(name);
    res.status(201).json({
      message: "Kategori berhasil ditambahkan",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
};
