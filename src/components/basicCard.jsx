import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/card.css";

export default function BasicCard(props) {
 
  return (
    <Card sx={{ minWidth: 275 }} className="card-mui">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
         {props.nome}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
         {`Informações do pedido - Mesa ${props.numero}`}
        </Typography>
      </CardContent>
      <CardActions>
        {!props.aprovado && <Button size="small">APROVAR PEDIDO</Button>}
        <Button size="small">VER</Button>
      </CardActions>
    </Card>
  );
}
