import React from "react";

import { HeaderzitoBack } from '../../../components/headerFiles'

import Footador from '../../../components/footerFiles'
import { SubmitButton, SubmitDisableButton2 } from "../../../components/inputButton";
// import { TitleEdit } from "../backoffice/usuarios/styles";
// import { LabelSty, Form } from "../login/styles";
// import { DivButt } from "../cadastro/styles";
import { DivForm, DivInpt, DiV, DivButn2 } from "../../perfil/styled";
import { DivformBackoff2, TitleEdit2 } from "./styles";
import { GrayInput1, SelectIpt1 } from "../../../components/inputButton/styles";
import { useState } from "react";

const options = [
    {
      label: "entregue",
      value: "entregue",
    },
    {
      label: "pendente",
      value: "pendente",
    },
    {
      label: "cancelado",
      value: "cancelado",
    },
];


export default function EditRequest () {
    const [status, setstatus] = useState("entregue");
    const handleStatusChange = (event) => {setstatus(event.target.value)}
    return (
        <>

            <HeaderzitoBack type={1}/>
            <TitleEdit2>Editar pedido</TitleEdit2>
            <hr></hr>
            <DiV>
                <DivformBackoff2>
                    <DivInpt>                                                                       
                        <label>Numero</label>
                        <GrayInput1>123</GrayInput1>
                    </DivInpt>
                    <DivInpt>
                        <label>Status</label>
                        { (status === "entregue") ? <SelectIpt1 id="green-color-type" onChange={ handleStatusChange } > { options.map((option) => ( <option id={ (option.value === "entregue") ? "green-color-type" : (option.value === "pendente") ? "blue-color-type" :  "red-color-type" } value={option.value} key={option.value}>{option.label}</option> )) } </SelectIpt1> :
                         (status === "pendente") ? <SelectIpt1 id="blue-color-type" onChange={ handleStatusChange } > { options.map((option) => ( <option id={ (option.value === "entregue") ? "green-color-type" : (option.value === "pendente") ? "blue-color-type" :  "red-color-type" } value={option.value} key={option.value}>{option.label}</option> )) } </SelectIpt1> : 
                        <SelectIpt1 id="red-color-type" onChange={ handleStatusChange } > { options.map((option) => ( <option id={ (option.value === "entregue") ? "green-color-type" : (option.value === "pendente") ? "blue-color-type" :  "red-color-type" } value={option.value} key={option.value}>{option.label}</option> )) } </SelectIpt1> }
                    </DivInpt>
                    <DivInpt>
                        <label>Data</label>
                        <GrayInput1>20/10/1999</GrayInput1>
                    </DivInpt>
                    <DivInpt>
                        <label>Usuário</label>
                        <GrayInput1>gaucho, ronaldinho</GrayInput1>
                    </DivInpt>
                    <DivInpt>
                        <label>Preço Total</label>
                        <GrayInput1>420.00</GrayInput1>
                    </DivInpt>
                </DivformBackoff2>
            </DiV>
            <DivButn2>
                <SubmitDisableButton2></SubmitDisableButton2>
                <SubmitButton text="Salvar" butSize="11%" butAlt="4vh"/>
            </DivButn2>
            <Footador />
        </>
    )
}