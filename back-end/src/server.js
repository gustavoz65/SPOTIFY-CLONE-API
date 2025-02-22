const path = require("path");
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

// rotas da sua API
const userRoutes = require("./routes/userRoutes");
// ...

const app = express();
app.use(cors());
app.use(express.json());

// Ajuste o caminho para a pasta front-end (saindo de src e voltando, etc.)
app.use(express.static(path.join(__dirname, "..", "..", "front-end")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "front-end", "index.html"));
});

app.use("/api/users", userRoutes);
// ...

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});

module.exports = app;
