const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const userRoutes = require("./routes/userRoutes");
const musicRoutes = require("./routes/musicRoutes");
const playlistRoutes = require("./routes/playlistRoutes");

const app = express();
app.use(cors());
app.use(express.json());

//rotas
app.use("/api/users", userRoutes);
app.use("/api/musics", musicRoutes);
app.use("/api/playlists", playlistRoutes);

// sincronização com o banco
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Banco sincronizado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
