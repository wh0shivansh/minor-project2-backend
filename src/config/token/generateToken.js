const jwt = require("jsonwebtoken");

const generateToken = (id,role) => {
  return jwt.sign({ id,role }, process.env.JWT_KEY, { expiresIn: "20d" });
};

module.exports = generateToken;
