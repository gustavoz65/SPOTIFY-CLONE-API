const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Token não encontrado" });
    }

    const token = authHeader.split("")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};
