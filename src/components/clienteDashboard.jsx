import "../css/card.css";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import BasicCard from "./basicCard";
import { CardActions, TextField } from "@material-ui/core";
import Button from "@mui/material/Button";


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import { Stack } from "@mui/material";
import MediaCard from "./mediaCard";

const ClienteDashboard = (props) => {
  const [active, setActive] = useState("reserva");
  const [value, onChange] = useState(new Date());

  const renderContent = () => {
    if (active == "reserva") {
      return (
        <div style={{marginTop: 50}}>

        <Card sx={{ minWidth: 275, minHeight: 300 }}>
          <CardContent>
            
           
          <Stack  justifyContent="left">
            <div className="m-t-30">
              <TextField
                color="success"
                label="Numero de pessoas"
                placeholder="Numero de pessoas"
                type="number"
                fullWidth
                required
              />
            </div>
          </Stack>

            <Stack direction="row" justifyContent="left">
            <div style={{marginTop: 10}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                value={value}
                onChange={(newValue) => {
                  onChange(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
                  </LocalizationProvider>
            </div>
         </Stack>

          </CardContent>
          <Stack  mt={10} direction="row" justifyContent="left" >
            <CardActions>
              <Button size="small">SOLICITAR RESERVA</Button>
            </CardActions>
          </Stack>
        </Card>
        </div>
      );
    }

    if (active == "aprovado") {
      return (
        <div>
          <BasicCard nome={"Igor Sabarense"} numero={3} aprovado />
          <BasicCard nome={"Igor Sabarense"} numero={6} aprovado />
          <BasicCard nome={"Igor Sabarense"} numero={5} aprovado />
          <BasicCard nome={"Igor Sabarense"} numero={4} aprovado />
        </div>
      );
    }

    if (active == "cardapio") {
      return (
        <div className="header-card row">
          <MediaCard img={'/images/purista-americano.jpg'} title={'Americano'} info={'A Pure Black diluted in 120ml of water'}/>
          <MediaCard img={'/images/gelado-iced-latte.jpg'} title={'Iced Latte'} info={'The purity of coffee (18g), milk and ice. Beautiful and refreshing. (with coffee and milk)'}/>
          <MediaCard img={'/images/quente-truewhite.jpg'} title={'True White'} info={'Our signature latte, with a coffee 18 g of coffee. (with coffee and milk) (230 ml)'}/>
          <MediaCard img={'/images/coado-gelado.jpg'} title={'Iced Black'} info={'Coffee with ice. (Only coffee) (280ml)'}/>
        </div>
      );
    }
  };

  const card = (
    <div className="card-height overflow-auto">
      <CardContent>
        <div className="header-card">
          <div
            className="header-card-child"
            onClick={() => setActive("reserva")}
          >
            <strong>Reserva</strong>
          </div>
          <div
            className="header-card-child"
            onClick={() => setActive("cardapio")}
          >
            <strong>Cardápio</strong>
          </div>
          <div
            className="header-card-child"
            onClick={() => setActive("aprovado")}
          >
            <strong>Historico</strong>
          </div>
        
        </div>
        {renderContent()}
      </CardContent>
    </div>
  );

  return (
    <div className="home">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
};

export default ClienteDashboard;
