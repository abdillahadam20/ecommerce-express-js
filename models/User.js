const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  customer_id: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  token: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
