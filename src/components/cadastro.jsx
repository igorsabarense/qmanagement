import React from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import "../css/home.css";
import { signUp, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Cadastro = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const currentUser = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const marginTop = error ? 15 : 50;

  const signUpFirebase = async () => {
    setLoading(true);
    setError(undefined);

    if (password == passwordConfirm) {
      try {
        await signUp(email, password);
        navigate(props.url);
      } catch {
        setError("Erro ao criar usuário!");
      }
    } else if (password != passwordConfirm) {
      setError("As senhas são diferentes!");
    } else if (password.length < 6) {
      setError("A senha deve ter no mínimo 6");
    }

    setLoading(false);
  };

  return (
    <Grid className="home">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h2>{props.nome}</h2>
        </Grid>
        {error && (
          <div style={{ marginTop: 30 }}>
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        {/* 
        <TextField
          label="Nome"
          placeholder="Nome completo"
          fullWidth
          required
        />

        <TextField
          label={'CPF/CNPJ'}
          placeholder={'CPF/CNPJ'}
          fullWidth
          required
        /> */}

        <div style={{ marginBottom: 10, marginTop: marginTop }}>
          <TextField
            label="Email"
            placeholder="Email"
            type="email"
            fullWidth
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <TextField
            label="Senha"
            placeholder="Senha"
            type="password"
            fullWidth
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <TextField
            label="Confirmar Senha"
            placeholder="Confirmar Senha"
            type="password"
            fullWidth
            required
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />
        </div>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={signUpFirebase}
          disabled={loading}
          fullWidth
        >
          Cadastrar
        </Button>
      </Paper>
    </Grid>
  );
};

export default Cadastro;
