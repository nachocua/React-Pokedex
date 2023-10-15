import React from "react";
import "./index.css";
import Tipo, { tipos } from "../../Components/Tipo";
import { Title, Body14 } from "../../Components/Tipografia";
import styled from "styled-components";

export default function Pokedex() {
   return (
      <div className="poketarjeta">
         <div className="poketarjeta-cabecera">
            <Title>Charizard</Title>
            <Body14>#006</Body14>
         </div>
         <div className="poketarjeta-tipos">
            <Tipo tipo={tipos.fuego} />
            <Tipo tipo={tipos.volador} />
         </div>
      </div>
   );
}
