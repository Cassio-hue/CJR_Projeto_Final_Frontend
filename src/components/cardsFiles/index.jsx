import React from "react";
import { Div_container, Card_image, Card_Description, Card_Details, Card_Name , Card_button, Card, 
    Card_price, Delete_button, Card_buttons, Qtdade_itens_field, Card_width, Card_text, Cardhor_image, Card_title, Card_adjust_itens, Card_div, Cardhor_qtdade,
    Qtdade_itens_field2, Delete_button2, Qtadebutton } from "./card_styles";

import { SubmitButton } from "../inputButton";


export function Carta (){
    return (
        <Div_container>
            <Card>
                <Card_image src="https://i.picsum.photos/id/225/1500/979.jpg?hmac=jvGoek9ng_Y0GaBbzxN0KJhHaiPtk1VfRcukK8R8FxQ"></Card_image>
                <Card_Details>
                    <Card_Name>oi pessoal</Card_Name>
                    <Card_Description>ronalidinho bem legal hahaha</Card_Description>
                    <Card_price>preco preco</Card_price>
                    <Card_buttons>                    
                        <Card_button>editar</Card_button>
                        <Delete_button>excluir</Delete_button>
                    </Card_buttons>

                </Card_Details>
            </Card>
        </Div_container>
    );

}


export function Cartaqtdade (){
    return (
        <Div_container>
            <Card>
                <Card_image src="https://i.picsum.photos/id/225/1500/979.jpg?hmac=jvGoek9ng_Y0GaBbzxN0KJhHaiPtk1VfRcukK8R8FxQ"></Card_image>
                <Card_Details>
                    <Card_Name>oi pessoal</Card_Name>
                    <Card_Description>ronalidinho bem legal hahaha</Card_Description>
                    <Card_price>preco preco</Card_price>
                    <label htmlFor="qtdade">Quantidade</label>
                    <Qtdade_itens_field type="number" min="0"></Qtdade_itens_field>
                    <Qtadebutton>adicionar</Qtadebutton>
                </Card_Details>
            </Card>
        </Div_container>
    );

}

export function Cartahorfixa () {
    return (
    <>
        <Card_width className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Cardhor_image src="https://i.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo" className="card-img" alt="no image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Card_title className="card-title">Card title</Card_title>
                        <Card_text className="card-text">Quatidade: </Card_text>
                        <Card_text className="card-text">Preco/unidade: </Card_text>
                        <Card_text className="card-text">Total: </Card_text>
                    </div>
                </div>
            </div>
        </Card_width>
    </>
    )
}

export function Cartahorinput () {
    return (
    <>  
        <Card_width className="card mb-3">
            <Card_div className="card row">
                <div className="col-md-4 row">
                    <Cardhor_image src="https://i.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo" className="card-img" alt="no image"/>
                </div>
                <Card_adjust_itens>
                    <Card_title className="card-title">Card title</Card_title>
                    <Card_text className="card-text">Preco/unidade: 69,00</Card_text>
                    <Card_text className="card-text">Total: 420,00</Card_text>
                </Card_adjust_itens>
                <div>
                    <Cardhor_qtdade className="text-muted">Quantidade </Cardhor_qtdade>
                    <div className="form-group">
                        <Qtdade_itens_field2 type="number" min="0"></Qtdade_itens_field2>         
                    </div>
                        <div className="form-group">
                        <Delete_button2>remover</Delete_button2>
                        </div>
                </div>
                
            </Card_div>
        </Card_width>
    </>
    )
}