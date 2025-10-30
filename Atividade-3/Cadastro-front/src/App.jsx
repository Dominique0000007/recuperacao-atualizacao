import React, { useState } from "react";
import "./App.css";
import { errorMonitor } from "nodemailer/lib/xoauth2";
import { error } from "console";
import server from "./server.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Cadastro({ onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setUsername("");
        setPassword("");
        onSwitch(); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor");
    }
  };
  return (
    <div className="form tela-cadastro">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuário" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Registrar</button>
      </form>
      <button className="link-btn" onClick={onSwitch}>Já tem conta? Login</button>
    </div>
  );
}
function Login({ onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setUsername("");
        setPassword("");
        onSwitch(); 
      } else {
        alert(data.message);
        onSwitch(); 
      }
    } catch (error) {
      errorMonitor({
        message: error.message,
        stack: error.stack,
        name: error.name,
        cause: error.cause,
      })
      alert("Erro ao conectar com o servidor");
    }
  };
  return (
    <div className="form tela-login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuário" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Entrar</button>
      </form>
      <button className="link-btn" onClick={onSwitch}>Voltar ao Cadastro</button>
    </div>
  );
}
export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container">
      <div className={`form-wrapper ${showLogin ? "login-active" : ""}`}>
        <Cadastro onSwitch={() => setShowLogin(true)} />
        <Login onSwitch={() => setShowLogin(false)} />
      </div>
    </div>
  );
}