import React from "react";
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
import {useNavigate} from 'react-router-dom'


const Login = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>{props.nome}</h2>
        </Grid>
        <TextField
          label="Usuario"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Senha"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Lembrar credenciais"
        />
        <Button
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={() => navigate(props.navigateUrl)}
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
