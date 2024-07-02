const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserByToken,
} = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/getUserByToken", getUserByToken);

module.exports = router;
