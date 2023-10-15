import React from "react";
import PropTypes, { object } from "prop-types";
import styled, { css } from "styled-components";

export const tipos = {
   fuego: "fuego",
   volador: "volador",
   electrico: "electrico",
   agua: "agua",
   psiquico: "psiquico",
};

const mapaDeTipos = {
   [tipos.fuego]: {
      texto: "Fuego",
      clase: "tipo-fuego",
   },
   [tipos.volador]: {
      texto: "Volador",
      clase: "tipo-volador",
   },
   [tipos.electrico]: {
      texto: "Electrico",
      clase: "tipo-electrico",
   },
   [tipos.psiquico]: {
      texto: "Psiquico",
      clase: "tipo-psiquico",
   },
   [tipos.agua]: {
      texto: "Agua",
      clase: "tipo-agua",
   },
};

const fuego = css`
   background: #ff3021;
   border-color: #cc261a;
`;

const volador = css`
   background: #8d9dfa;
   border-color: #7985ce;
`;

const electrico = css`
   background: #ffc530;
   border-color: #cc9e26;
`;

const StyleDiv = styled.div`
   display: inline-flex;
   flex-direction: row;
   padding: 0px 8px;
   height: 23px;
   box-sizing: border-box;
   border-radius: 5px;
   align-items: center;
   color: white;
   border-style: solid;
   border-width: 1px;
   ${({ tipo }) => {
      if (tipo === tipos.fuego) {
         return fuego;
      }
      if (tipo === tipos.volador) {
         return volador;
      }
      if (tipo === tipos.electrico) {
         return electrico;
      }
   }}
`;

export default function Tipo(props) {
   const tipo = mapaDeTipos[props.tipo];
   if (!tipo) {
      return null;
   }
   return <StyleDiv tipo={props.tipo}>{tipo.texto}</StyleDiv>;
}

Tipo.propTypes = {
   tipo: PropTypes.oneOf(Object.keys(tipos)).isRequired,
};
