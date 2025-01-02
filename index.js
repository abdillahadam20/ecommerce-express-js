const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/databases");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cartItemRoutes = require("./routes/cartItemsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/cart-items", cartItemRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
