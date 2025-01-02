const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Akses ditolak, token tidak ditemukan" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Sesuaikan dengan JWT_SECRET Anda
    req.user = decoded.user; // Menyimpan data user di req.user
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};

module.exports = authMiddleware;
