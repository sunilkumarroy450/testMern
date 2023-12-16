const express = require("express");
const router = express.Router();
const { create_user } = require("../controllers/user.controller");

router.post("/", create_user);

module.exports = router;
