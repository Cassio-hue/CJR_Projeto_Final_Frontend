import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
//import { api } from "../../services/Api";

import {
  ImgSty,
  DivColums,
  Titulo,
  Form,
  DivSon,
  DivMother,
  LabelSty,
  P,
  DivButt,
} from "./styles";

import {
  Input,
  SubmitButton,
  SubmitBordButton,
} from "../../components/inputButton";

const SignUpPage = "/cadastro";

export default function LoginPage() {
  const [signInSucess, setSingInSucess] = useState(false);

  const [email, setEmail] = useState("");

  const [pwd, setPassword] = useState("");

  const [user, , login, , getUserData] = useContext(AuthContext);

  useEffect(() => {
    console.log('aqui esta o user: ',user);
    console.log(email, pwd, signInSucess);
  }, [user, email, pwd, signInSucess]);

  const renderSubmit = async (click) => {
    click.preventDefault();

    const data = JSON.stringify({ email, password: pwd });
    console.log('dados_do_usuario: ', data);

    await login(data).then(() => {
        getUserData();
      })
      .catch((error) => setSingInSucess(false));
  };

  return (
    <>
      <DivColums>
        <ImgSty />
        <DivMother>
          <Form>
            <Titulo>dinnerdash</Titulo>

            <LabelSty htmlFor="email">Email</LabelSty>
            <Input
              type="text"
              larg="12%"
              altr="1vh"
              onChange={(e) => setEmail(e.target.value)}
            />

            <LabelSty htmlFor="senha">Senha</LabelSty>
            <Input
              tipo="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <DivButt>
              <SubmitButton text="Entrar" onClick={renderSubmit} />
            </DivButt>
          </Form>
          <DivSon>
            <P>Não possui conta?</P>
          </DivSon>
          <Link to={SignUpPage}>
            <SubmitBordButton text="Cadastrar" />
          </Link>
        </DivMother>
      </DivColums>
      {user.isLogged && <Navigate to="/home" />}
    </>
  );
}
