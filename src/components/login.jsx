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
import {useNavigate} from 'react-router-dom';
import { login } from '../firebase';




const Login = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try{
      await login(email , password);
      navigate(props.navigateUrl)
    }catch{
      alert('Error authenticating user!');
    }
  }


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>{props.nome}</h2>
        </Grid>
        <div style={{marginBottom:10}}>
          <TextField
          
            label="Usuario"
            placeholder="Enter username"
            fullWidth
            required
            onChange={(event)=> setEmail(event.target.value)}
          />
        </div>
        <TextField
          label="Senha"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(event)=> setPassword(event.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Lembrar credenciais"
        />
        <Button
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={handleLogin}
          fullWidth
        >
          Entrar
        </Button>
        <Typography>
          <Link href="#">Esqueceu a senha ?</Link>
        </Typography>
        <Typography>
          {" "}
          Não tem uma conta?
          <Link href={props.signUp}>Inscreva-se</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
