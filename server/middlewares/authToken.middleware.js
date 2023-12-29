const jwt = require("jsonwebtoken");
// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send({ error: "Access Denied" });
  jwt.verify(token, "SECRET", (err, user) => {
    if (err) return res.status(403).send({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
