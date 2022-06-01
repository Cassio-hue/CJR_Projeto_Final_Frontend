import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderSty = styled.header`
  background-position: 50%;
  background-size: cover;
  box-sizing: border-box;
  flex-direction: column;
  height: 45vh;
  justify-content: space-between;
  padding: 2% 5%;
  background-image: var(--dark-layer), var(--img-header);
  display: flex;
`;

/* utiliza styles(NavItens) para obter os itens de MainNav() */
export const MainNav = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
}
`;

export const ShortDesc = styled.p`
  color: white;
  font-size: 23px;
`;

export const HeaderText = styled.h1`
  color: white;
  font-size: 63px;
`;

export const DinnerDash = styled.h3`
  color: white;
  font-size: 30px;
`;

export const Dash = styled.span`
  color: orange;
`;

export const NavBot = styled(MainNav)`
  background-color: #343a40;
  padding: 1rem;
  display: inline-block;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    margin-left: 4vw;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;



export const NavLink = styled.a`
  color: white;
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;


export const BotLink = styled(NavLink)`
  background-color: #343a40;
  color: #fff;
  padding: 1rem 5%;
`;

export const NavItens = styled.span`
  display: flex;
  column-gap: 2rem;
  color: white;
  font-size: 1.2em;
  > a {
  text-decoration: none;
  color: white;
  &:hover {
   color: orange;
   cursor: pointer;
    }}
`;

export const Div_bg1 = styled(HeaderSty)`
  background-image: var(--dark-layer), var(--img-header-restaurant);
`;

export const Div_bg2 = styled(HeaderSty)`
  background-image: var(--dark-layer), var(--img-backoffice);
`;
