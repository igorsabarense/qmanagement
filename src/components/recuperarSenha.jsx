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
import { passwordRecovery } from "../firebase";
import { Alert } from "react-bootstrap";


const RecuperarSenha = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  

  const handlePasswordRecovery = async () => {
    setError(undefined);
    try {
      await passwordRecovery(email);
      navigate('/');
    } catch {
      setError("Erro ao enviar email de recuperação!");
    }
  };


  const marginTop = error ? 30 : 80

  return (
    <Grid className="home">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>{'Recuperar Senha'}</h2>
        </Grid>

        {error && (
          <div style={{marginTop:30}}>
            <Alert variant="danger">{error}</Alert>
          </div>
        )}


        <div style={{ marginTop: marginTop}}>
          <TextField
            label="Email"
            placeholder="Email"
            type="email"
            fullWidth
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>


        <div style={{ marginTop: 15 }}>
          <Button
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={handlePasswordRecovery}
            fullWidth
          >
            Recuperar senha
          </Button>
        </div>

      </Paper>
    </Grid>
  );
};

export default RecuperarSenha;
