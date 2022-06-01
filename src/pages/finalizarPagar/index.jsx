import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import { Headerzito } from "../../components/headerFiles";
import Footador from "../../components/footerFiles";
import { Cartahorinput } from "../../components/cardsFiles";

import { DivMeal, Titulo, Subtitulo, PriceFras } from "./styled";

export default function PedidoFinalizado() {
  const [user, , , ,] = useContext(AuthContext);
  return (
    <>
      <Headerzito
        userData={user}
        titulo={"Bem-vindo, " + user.name}
        descricao1={"Monte o seu prato, escolha sua salada, molho,"}
        descricao2={"prato principal, guarnição e bebida."}
        type={1}
      />

      <DivMeal>
        <Titulo marginT={"2rem"}>Seu pedido:</Titulo>
        <Subtitulo
          style={{
            color: "#A3A3A3",
          }}
        >
          Confira os itens pedidos do seu pedido mais recente.
        </Subtitulo>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
        </div>
        <div
          style={{
            marginTop: "5%",
            backgroundColor: "#F5F5F5",
            width: "100%",
            padding: "3rem",
            height: "25vh",
          }}
        >
          <PriceFras>Pedidos anteriores</PriceFras>
        </div>
      </DivMeal>
      <Footador />
      {!localStorage.getItem("token") && <Navigate to="/entrar" />}
    </>
  );
}
