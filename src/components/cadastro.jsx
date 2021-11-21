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
import '../css/home.css'
import { signUp, useAuth } from '../firebase';
import {useNavigate} from 'react-router-dom';


const Cadastro = (props) => {
  const paperStyle = { padding: 20, height: "50vh", width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const currentUser = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpFirebase = async () => { 
    console.log(email, password)
    setLoading(true)
    try{
      await signUp(email , password)
      navigate(props.url)
    } catch {
      alert("Error creating user!")
    }
    setLoading(false)
  }


  return (
    <Grid className="home">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h2>{props.nome}</h2>
        </Grid>

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
        />

        <TextField
          label="Email"
          placeholder="Email"
          type="email"
          fullWidth
          required
          onChange={(event)=> setEmail(event.target.value)}
        />
        
        <TextField
          label="Senha"
          placeholder="Senha"
          type="password"
          fullWidth
          required
          onChange={(event)=> setPassword(event.target.value)}
        />

        <TextField
          label="Confirmar Senha"
          placeholder="Confirmar Senha"
          type="password"
          fullWidth
          required
        />
        
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
