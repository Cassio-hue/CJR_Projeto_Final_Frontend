import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MainNav,
  ShortDesc,
  HeaderText,
  DinnerDash,
  Div_bg1,
  NavItens,
  NavLink,
  Dash,
  Div_bg2,
  NavBot,
  BotLink,
  StyledLink,
} from "./headerstyle";

import { AuthContext } from "../../context/AuthProvider";

export function NavItensSelector({ type }) {
  const [, logout, , ,] = useContext(AuthContext);

  if (type === 1) {
    return (
      <NavItens>
        <Link to="/tabelarequests">backoffice</Link>
        <Link to="/perfil">perfil</Link>
        <Link to="/meuspedidos">meus pedidos</Link>
        <Link to="/homeNotLogged" onClick={(e) => logout()}>
          sair
        </Link>
      </NavItens>
    );
  } else if (type === 2) {
    return (
      <NavItens>
        <Link to="/entrar">Entrar</Link>
        <Link to="/cadastro">Cadastrar</Link>
      </NavItens>
    );
  }
}

export function Headerzito(props) {
  const [user, , , ,] = useContext(AuthContext);
  return (
    <Div_bg1>
      <MainNav>
        <DinnerDash>
          dinner<Dash>dash</Dash>
        </DinnerDash>
        <NavItensSelector type={props.type} />
      </MainNav>
      <div>
        <HeaderText>{props.titulo}</HeaderText>
        <p style={{ color: "white", fontSize: "25px" }}>{props.descricao1}</p>
        <p style={{ color: "white", fontSize: "25px" }}>{props.descricao2}</p>
      </div>
    </Div_bg1>
  );
}

export function HeaderzitoBack() {
  const [, logout, , ,] = useContext(AuthContext);
  return (
    <>
      <Div_bg2>
        <MainNav>
          <DinnerDash>
            dinner<Dash>dash</Dash>
          </DinnerDash>
          <NavItens>
            <Link to="/tabelarequests">backoffice</Link>
            <Link to="/perfil">perfil</Link>
            <Link to="/perfil">meus pedidos</Link>
            <Link to="/homeNotLogged" onClick={(e) => logout()}>
              sair
            </Link>
          </NavItens>
        </MainNav>
        <div>
          <HeaderText>Backoffice</HeaderText>
          <ShortDesc>é o tal do comes e bebes ne</ShortDesc>
        </div>
      </Div_bg2>
      <NavBot>
        <Link to="/tabelarequests">Pedidos</Link>
        <Link to="/tabela">Usuários</Link>
        <Link to="">Refeições</Link>
        <Link to="/tabelameals">Categorias de Refeição</Link>
      </NavBot>
    </>
  );
}
