import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import { SubmitButton } from "../../components/inputButton";
import { Headerzito } from "../../components/headerFiles";
import { Cartahorinput } from "../../components/cardsFiles";
import Footador from "../../components/footerFiles";

import {
  DivMeal,
  DivButns,
  DivPrice,
  Titulo,
  Subtitulo,
  PriceFras,
  Value,
} from "./styled";


export default function MeusPedidos() {
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
        <Subtitulo>
          Confira os itens pedidos antes de finalizar o pedido.
        </Subtitulo>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
          <Cartahorinput></Cartahorinput>
        </div>
        <DivPrice>
          <div>
            <h1>Esqueceu algo?</h1>
            <Subtitulo>
              <Link to="/home" style={{ textDecoration: "none" }}>
                Clique aqui
              </Link>{" "}
              para retornar ao nosso menu
            </Subtitulo>
          </div>
          <div>
            <PriceFras>
              Preço total do pedido: <Value>R$0,00</Value>
            </PriceFras>
            <DivButns>
              <Link to="/pedidofinalizado">
                <SubmitButton
                  text="Finalizar e pagar"
                  butSize="18rem"
                  butAlt="45px"
                />
              </Link>
            </DivButns>
          </div>
        </DivPrice>
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
          <p
            style={{
              color: "gray",
              background: "rgba(0, 133, 255, 0.41)",
              borderRadius: "5px",
              padding: "1rem",
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            Você ainda não fez nenhum pedido
          </p>
        </div>
      </DivMeal>
      <Footador />
      {!localStorage.getItem("token") && <Navigate to="/entrar" />}
    </>
  );
}
