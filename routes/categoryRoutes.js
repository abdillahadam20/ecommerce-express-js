// routes/categoryRoutes.js

const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Menambahkan kategori baru
router.post("/", categoryController.addCategory);

router.get("/", categoryController.getCategories);

module.exports = router;
