import React from "react";
import { useState, useEffect, useContext } from "react";
//import { api } from "../../services/Api";
import { AuthContext } from "../../context/AuthProvider";
import { Link, Navigate } from "react-router-dom";

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

const LoginPage = "/entrar";

export default function SignUpPage() {
  const [signUpSucess, setSingUpSucess] = useState(false);
  const [user, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [pwd, setPassword] = useState("");

  const [matchPwd, setMatchPwd] = useState("");

  const [, , , signUp,] = useContext(AuthContext);

  useEffect(() => {
    console.log(user, email, pwd, matchPwd);
  }, [user, email, pwd, matchPwd]);

  const renderSubmit = async (click) => {
    click.preventDefault();

    if (pwd === matchPwd) {
      const data = JSON.stringify({ name: user, email, password: pwd });
      console.log(data);
      await signUp(data)
        .then((response) => setSingUpSucess(true))
        .catch((error) => setSingUpSucess(false));
    } else {
      alert("Senhas diferentes");
    }
  };

  return (
    <>
      <DivColums>
        <ImgSty />
        <DivMother>
          <Titulo>dinnerdash</Titulo>
          <Form>
            <LabelSty htmlFor="username">Nome</LabelSty>
            <Input
              id="username"
              tipo="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <LabelSty htmlFor="email">Email</LabelSty>
            <Input
              id="email"
              tipo="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <LabelSty htmlFor="password">Senha</LabelSty>
            <Input
              id="password"
              tipo="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <LabelSty htmlFor="matchPwd">Confirme sua senha</LabelSty>
            <Input
              id="matchPwd"
              tipo="password"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
            />

            <DivButt>
              <SubmitButton text="Cadastrar" onClick={renderSubmit} />
            </DivButt>
          </Form>

          <DivSon>
            <P>Já possui conta?</P>
          </DivSon>
          <Link to={LoginPage}>
            <SubmitBordButton text="Entrar" />
          </Link>
        </DivMother>
      </DivColums>
      {signUpSucess && <Navigate to="/entrar" />}
    </>
  );
}
