const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const usuarios = {};


app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Usuário e senha são obrigatórios" });
    }
    if (username.length < 3) {
        return res.status(400).json({ message: "Usuário deve ter pelo menos 3 caracteres" });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: "Senha deve ter pelo menos 6 caracteres" });
    }
    if (usuarios[username]) {
        return res.status(400).json({ message: "Usuário já existe" });
    }
    usuarios[username] = password;
    res.json({ message: "Registrado com sucesso" });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!usuarios[username]) {
        return res.status(401).json({ message: "Usuário não encontrado" });
    }
    if (usuarios[username] !== password) {
        return res.status(401).json({ message: "Credenciais inválidas" });
    }
    res.json({ message: "Login realizado com sucesso" });
});