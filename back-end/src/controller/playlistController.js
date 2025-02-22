const { Playlist, Music } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const { user } = req;
      const { name } = req.body;
      if (!name) {
        return res
          .status(400)
          .json({ error: "Nome da playlist é obrigatório." });
      }

      const playlist = await Playlist.create({
        name,
        userId: user.userId,
      });

      return res.status(201).json({
        message: "Playlist criada!",
        playlist,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async addMusic(req, res) {
    try {
      const { user } = req;
      const { playlistId } = req.params;
      const { musicId } = req.body;

      const playlist = await Playlist.findByPk(playlistId);

      if (!playlist) {
        return res.status(404).json({ error: "Playlist não encontrada." });
      }
      if (playlist.userId !== user.userId) {
        return res
          .status(403)
          .json({ error: "Acesso negado: playlist não pertence a você." });
      }

      const music = await Music.findByPk(musicId);
      if (!music) {
        return res.status(404).json({ error: "Música não encontrada." });
      }

      await playlist.addSong(music);

      return res.json({
        message: "Música adicionada à playlist!",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async listMyPlaylists(req, res) {
    try {
      const { user } = req;
      const playlists = await Playlist.findAll({
        where: { userId: user.userId },
        include: ["songs"],
      });
      return res.json(playlists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
