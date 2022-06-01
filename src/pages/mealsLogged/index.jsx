import React from 'react';
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import { Headerzito } from '../../components/headerFiles'
import Footador from '../../components/footerFiles'
import { Cartaqtdade, Cartahorinput } from '../../components/cardsFiles'

import { DivCards,
         DivMeal,
         DivButns,
         DivPrice,
         MealName,
         Titulo,
         Subtitulo,
         PriceFras,
         Value } from './styled'

import { SubmitButton } from '../../components/inputButton'

export default function MealsPage() {
    const [user, , , , ] = useContext(AuthContext);
    return (
        <>
            <Headerzito
            userData={user}
            titulo={"Bem-vindo, "+user.name}
            descricao1={"Monte o seu prato, escolha sua salada, molho,"} 
            descricao2={"prato principal, guarnição e bebida."} 
            type={1}/>

            <DivMeal>
                <MealName>Saladas</MealName>
                <DivCards>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                </DivCards>
            </DivMeal>

            <DivMeal>
                <MealName>Molhos</MealName>
                <DivCards>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                </DivCards>
            </DivMeal>

            <DivMeal>
                <MealName>Pratos principais</MealName>
                <DivCards>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                </DivCards>
            </DivMeal>

            <DivMeal>
                <MealName>Guarnições</MealName>
                <DivCards>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                </DivCards>
            </DivMeal>

            <DivMeal>
                <MealName>Bebidas</MealName>
                <DivCards>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                    <Cartaqtdade/>
                </DivCards>
            </DivMeal>

            <DivMeal>
                <Titulo marginT={'2rem'}>Finalizou o seu prato?</Titulo>
                <Subtitulo>Confira os itens pedidos antes de finalizar o pedido.</Subtitulo>
                <div style={{display: 'grid', gridTemplateColumns:'auto auto'}}>
                    <Cartahorinput></Cartahorinput>
                    <Cartahorinput></Cartahorinput>
                    <Cartahorinput></Cartahorinput>
                    <Cartahorinput></Cartahorinput>
                </div>
                <DivPrice>
                    <PriceFras>Preço total do pedido: <Value>R$0,00</Value></PriceFras>
                    <DivButns>
                        <Link to='/pedidofinalizado'><SubmitButton text="Finalizar e pagar" butSize="18rem" butAlt="45px"/></Link>
                    </DivButns>

                </DivPrice>
            </DivMeal>

            <Footador/>
            {!localStorage.getItem('token') && <Navigate to="/entrar" />}
        </>
    )
}