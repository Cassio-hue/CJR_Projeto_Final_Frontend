import React from "react";

import { HeaderzitoBack } from "../../../components/headerFiles";

import Footador from "../../../components/footerFiles";
import {
  Input,
  SubmitButton,
  SubmitDisableButton2,
} from "../../../components/inputButton";

import { DivInpt, DiV, DivformBackoff, DivButn2 } from "../../perfil/styled";
import { TitleEdit } from "../usuarios/styles"; //cassio mudou aqui 15:07 27/05
import { Link } from "react-router-dom";

export default function NewMeal() {
  return (
    <>
      <HeaderzitoBack type={1} />
      <TitleEdit> Nova categoria de refeição</TitleEdit>
      <hr></hr>
      <DiV>
        <DivformBackoff>
          <DivInpt>
            <label>Nome</label>
            <Input tipo="text" inpWidth="100%" inpAltura="55%" />
          </DivInpt>
        </DivformBackoff>
      </DiV>
      <DivButn2 id="corrige-footador">
        <SubmitDisableButton2 rota='/tabelameals'></SubmitDisableButton2>
        <SubmitButton
          text="Criar nova categoria de refeição"
          butSize="21%"
          butAlt="4vh"
        />
      </DivButn2>
      <Footador />
    </>
  );
}
