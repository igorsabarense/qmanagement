import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Home() {
    let navigate = useNavigate();

    const handleClickGerenciaHome = () => {
        navigate("gerencia");
    }

    const handleClickClienteHome = () => {
        navigate("cliente");
    }

    return (
      <div>
        <div style={{ textAlign: "center", padding: "50px", fontSize: 15 }}>
          <h1>QManagement</h1>
        </div>
        <div style={{ textAlign: "center", padding: "50px", fontSize: 15 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "30px", marginBottom: 15 }}>
              <strong style={{ paddingRight: 35 }}>Área do Cliente</strong>
              <Button onClick={handleClickClienteHome}>
                Entrar
              </Button>
            </div>
            <div style={{ fontSize: "30px", marginBottom: 15 }}>
              <strong style={{ paddingRight: 23 }}>Área do Gerente</strong>
              <Button onClick={handleClickGerenciaHome}>
                Entrar
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    );
}
