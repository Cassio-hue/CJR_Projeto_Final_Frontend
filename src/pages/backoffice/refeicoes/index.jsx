import React from "react";

import { HeaderzitoBack } from "../../../components/headerFiles";

import Footador from "../../../components/footerFiles";
import {
  DisableInput,
  Input,
  SubmitButton,
  SubmitDisableButton2,
} from "../../../components/inputButton";
import { TitleEdit } from "../usuarios/styles";
import {
  DivInpt,
  DiV,
  DivformBackoff,
  DivButn2,
} from "../../perfil/styled";

import { Link } from "react-router-dom";

export default function EditMeal() {
  return (
    <>
      <HeaderzitoBack type={1} />
      <TitleEdit>Editar refeição</TitleEdit>
      <hr></hr>
      <DiV>
        <DivformBackoff>
          <DivInpt>
            <label>Nome</label>
            <Input tipo="text" inpWidth="100%" inpAltura="55%" />
          </DivInpt>
          <DivInpt>
            <label>Cadastrado em:</label>
            <DisableInput></DisableInput>
          </DivInpt>
        </DivformBackoff>
      </DiV>
      <DivButn2 id="corrige-footador">
        <SubmitDisableButton2 rota='/tabelameals'></SubmitDisableButton2>
        <SubmitButton text="Salvar" butSize="21%" butAlt="4vh" />
      </DivButn2>
      <Footador />
    </>
  );
}
