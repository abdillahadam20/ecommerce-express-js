const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

exports.register = async (userData) => {
  const { full_name, customer_id, email, password, role } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    full_name,
    customer_id,
    email,
    password: hashedPassword,
    role,
  });

  await newUser.save();
  return {
    message: "Registered successfully",
    user: newUser,
  };
};

exports.login = async (credentials) => {
  const { email, password } = credentials;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  user.token = [token];
  await user.save();

  return {
    message: "Logged in successfully",
    token,
    user,
  };
};
