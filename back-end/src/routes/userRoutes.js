const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.resgiter);
router.post("/login", userController.login);

module.exportsq = router;
