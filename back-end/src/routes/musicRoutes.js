const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const musicController = require("../controller/musicController");

router.post("/", authMiddleware, musicController.create);

router.get("/", musicController.list);

module.exports = router;
