const express = require("express");
const router = express.Router();
const {
  register_user,
  login_user,
  authenticate_token,
} = require("../controllers/user.controller");
const { authenticateToken } = require("../middlewares/authToken.middleware");

router.post("/register", register_user);
router.post("/login", login_user);
router.get("/protected", authenticateToken, authenticate_token);

module.exports = router;
