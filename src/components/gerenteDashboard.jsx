import "../css/card.css";
import * as React from "react";
import { useState } from "react";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import BasicCard from "./basicCard";
import Box from "@mui/material/Box"


const GerenteDashboard = (props) => {
  const [active, setActive] = useState("fila");



  const renderContent = () => {
    if (active == "fila") {
      return  (
        <div>
            <BasicCard nome={'Igor Sabarense'} numero={3} />
            <BasicCard nome={'Frederico Terrinha'} numero={6} />
            <BasicCard nome={'Pedro Almeida'} numero={5} />
            <BasicCard nome={'Brenon Henrique'} numero={4} />
        </div>
     
      )
      
    }

    if (active == "aprovado") {
        return  (
            <div>
                <BasicCard nome={'Pietro'} numero={3} aprovado />
                <BasicCard nome={'Alexei'} numero={6} aprovado/>
                <BasicCard nome={'Marco'} numero={5} aprovado />
                <BasicCard nome={'Zarate'} numero={4} aprovado />
            </div>
         
          )
    }

    if (active == "config") {
      return <div className="header-card">
           <ul style={{alignItems:'left'}}>
              <li>
                  Alterar credenciais
              </li> 
              <li>
                  Cadastrar cardápio
              </li> 
              <li>
                  Suporte
              </li> 
              <li>
                 Sobre
              </li> 
            </ul>           
        </div>
    }
  };

  const card = (
    <div className="card-height">
      <CardContent>
        <div className="header-card">
          <div className="header-card-child" onClick={() => setActive("fila")}>
            <strong>Fila</strong>
          </div>
          <div
            className="header-card-child"
            onClick={() => setActive("aprovado")}
          >
            <strong>Aprovado</strong>
          </div>
          <div
            className="header-card-child"
            onClick={() => setActive("config")}
          >
            <strong>Configurações</strong>
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

export default GerenteDashboard;
