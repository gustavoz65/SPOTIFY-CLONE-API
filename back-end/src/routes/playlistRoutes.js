const express = require("express");
const router = express.Router();
const playlistController = require("../controller/playlistController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, playlistController.create);
router.post("/:playlistId/music", authMiddleware, playlistController.addMusic);
router.get("/me", authMiddleware, playlistController.listMyPlaylists);

module.exports = router;
