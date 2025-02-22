const { Music, User } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const { user } = req;
      if (user.role !== "ARTIST") {
        return res
          .status(403)
          .json({ error: "Acesso negado, a Conta precisa ser de artista" });
      }

      const { title, genre, duration } = req.body;
      if (!title) {
        return res.status(400).json({ error: "titulo é Obrigatorio" });
      }

      const newMusic = await Music.create({
        title,
        genre,
        duration,
        artistId: user.userId,
      });

      return res.status(201).json({
        message: "Música cadastrada com sucesso",
        music: newMusic,
      });
    } catch (error) {
      return res, status(500).json({ error: error.message });
    }
  },

  async list(req, res) {
    try {
      const musics = await Music.findAll({
        include: {
          model: User,
          as: "artist",
          attributes: ["id", "name", "role"],
        },
      });

      return res.json(musics);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
