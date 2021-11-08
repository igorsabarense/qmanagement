import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../css/card.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <div className="card-height">
    <CardContent>
      <div className="header-card">
        <div className="header-card-child"><strong>Fila</strong></div>

        <div className="header-card-child"><strong>Aprovado</strong></div>

        <div className="header-card-child"><strong>Configurações</strong></div>
      </div>
    </CardContent>
  </div>
);

class ClienteDashboard extends React.Component {
  render() {
    return (
      <div className="home">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    );
  }
}

export default ClienteDashboard;
