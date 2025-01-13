// services/categoryService.js

const Category = require("../models/Category");

const addCategory = async (name) => {
  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error("Gagal menambah kategori: " + error.message);
  }
};

const getCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error("Gagal mengambil kategori: " + error.message);
  }
};

module.exports = {
  addCategory,
  getCategories,
};
