import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


import { Headerzito } from '../../components/headerFiles'
import { 
    SubmitButton,
    Input,    
} from '../../components/inputButton'

import { DivForm, DivInpt, DivButn } from "./styled";
import Footador from '../../components/footerFiles'


export default function PerfilPage () {
    const [user, , , , ] = useContext(AuthContext);
    return (
        <>
            <Headerzito 
            type={1} 
            userData={user}
            titulo={"Seu perfil"}
            descricao1={"Atualize os seus dados pessoais e senha."}
            />
                <DivForm>
                    <DivInpt>
                        <label>Nome</label>
                        <Input tipo="text" placeHolder={user.name} inpWidth="100%" inpAltura="70%"/>
                    </DivInpt>
                    <DivInpt>
                        <label>Email</label>
                        <Input placeHolder={user.email} tipo="text" inpWidth="100%" inpAltura="70%"/>
                    </DivInpt>
                    <DivInpt>
                        <label>Nova senha</label>
                        <Input placeHolder="Deixe em branco caso não queira alterar" tipo="password" inpWidth="100%" inpAltura="70%"/>
                    </DivInpt>
                    <DivInpt>
                        <label>Senha atual *</label>
                        <Input tipo="password" inpWidth="100%" inpAltura="70%"/>
                    </DivInpt>
                </DivForm>
            <DivButn>
                <SubmitButton text="Salvar" butSize="50%"/>
            </DivButn>
            {(!localStorage.getItem('token')) && <Navigate to="/homeNotLogged" />}
            <Footador />
        </>
    )
}