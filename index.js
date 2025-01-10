const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const connectDB = require("./config/databases");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cartItemRoutes = require("./routes/cartItemsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const orderRoutes = require("./routes/orderRoutes");
const orderStatusRoutes = require("./routes/orderStatusRoutes");

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/cart-items", authMiddleware, cartItemRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/delivery", authMiddleware, deliveryRoutes);
app.use("/api/orders", authMiddleware, orderRoutes);
app.use("/api/order-status", authMiddleware, orderStatusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
