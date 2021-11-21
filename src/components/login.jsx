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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase";
import { Alert } from "react-bootstrap";

const Login = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setError(undefined);
    try {
      await login(email, password);
      navigate(props.navigateUrl);
    } catch {
      setError("Erro ao autenticar usuário!");
    }
  };

  const marginTop = error ? 15 : 50;

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>{props.nome}</h2>
        </Grid>
        <div style={{ marginBottom: 10, marginTop: marginTop }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <TextField
            label="Usuario"
            placeholder="Enter username"
            fullWidth
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <TextField
          label="Senha"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(event) => setPassword(event.target.value)}
        />

        <div style={{ marginTop: 15 }}>
          <Button
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={handleLogin}
            fullWidth
          >
            Entrar
          </Button>
        </div>

        <div style={{ marginTop: 25 }}>
          <Typography>
            <Link href="#">Esqueceu a senha ?</Link>
          </Typography>
          <Typography>
            {" "}
            Não tem uma conta?
            {" "} <Link href={props.signUp}>Inscreva-se</Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
