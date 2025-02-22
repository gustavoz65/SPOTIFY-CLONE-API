const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Defina suas rotas, por exemplo:
router.post("/register", userController.resgister);
router.post("/login", userController.login);

module.exports = router;
