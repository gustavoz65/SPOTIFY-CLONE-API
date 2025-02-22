const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/");

module.exports = {
  async resgiter(req, res) {
    try {
      const { name, email, password } = req.body;

      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: "Email já cadastrado" });
      }

      const hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        passoword: hash,
        role,
      });

      return res.status(201).json({
        message: "Usuário registrado com sucesso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await user.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: "Usuário ou senha incorretos" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Usuário ou senha incorretos" });
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.json({
        message: "Login bem-sucedido",
        token,
        user: { id: user.id, name: user.name, role: user.role },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
