import React from 'react';
import { Link } from 'react-router-dom';

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

import { SubmitButton, SubmitBordButton } from '../../components/inputButton'

const LoginPage = "/entrar"
const SingUpPage = "/cadastro"

export default function MealsPage() {
    return (
        <>
            <Headerzito 
            type={2}
            titulo={"Monte o seu prato"}
            descricao1={"Escolha sua salada, molho, prato principal, guarnição e bebida."} 
            />

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
                    <Subtitulo>Para finalizar o seu pedido, entre com sua conta ou faça o seu cadastro.</Subtitulo>
                    <DivButns>
                        <Link to={LoginPage}><SubmitButton text="Entrar com minha conta" butSize="18rem" butAlt="45px"/></Link>
                        <Link to={SingUpPage}><SubmitBordButton text="Fazer meu cadastro" butSize="18rem" butAlt="45px"/></Link>
                    </DivButns>

                </DivPrice>
            </DivMeal>

            <Footador/>
        </>
    )
}