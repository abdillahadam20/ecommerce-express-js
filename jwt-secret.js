const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const secret = crypto.randomBytes(64).toString("hex");
const envPath = path.join(__dirname, ".env");

fs.readFile(envPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading .env file:", err);
    return;
  }

  const updatedEnv = data.replace(/JWT_SECRET=.*/, `JWT_SECRET=${secret}`);

  fs.writeFile(envPath, updatedEnv, "utf8", (err) => {
    if (err) {
      console.error("Error writing .env file:", err);
      return;
    }

    console.log("JWT secret generated and updated in .env file");
  });
});
