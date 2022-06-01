import React from "react";

import { HeaderzitoBack } from "../../../components/headerFiles";

import Footador from "../../../components/footerFiles";
import {
  DisableInput,
  Input,
  SelectInput,
  SubmitButton,
  SubmitDisableButton2,
} from "../../../components/inputButton";
import { TitleEdit } from "./styles";

import { DivInpt, DiV, DivformBackoff, DivButn2 } from "../../perfil/styled";

export default function EditUser() {
  return (
    <>
      <HeaderzitoBack type={1} />
      <TitleEdit>Editar usuario</TitleEdit>
      <hr></hr>
      <DiV>
        <DivformBackoff>
          <DivInpt>
            <label>Nome</label>
            <Input tipo="text" inpWidth="100%" inpAltura="55%" />
          </DivInpt>
          <DivInpt>
            <label>Permissoes</label>
            <SelectInput>
              <option>perdo</option>
              <option>admin</option>
            </SelectInput>
          </DivInpt>
          <DivInpt>
            <label>Email</label>
            <Input tipo="text" inpWidth="100%" inpAltura="55%" />
          </DivInpt>
          <DivInpt>
            <label>Cadastrado em:</label>
            <DisableInput>que??</DisableInput>
          </DivInpt>
        </DivformBackoff>
      </DiV>
      <DivButn2>
        <SubmitDisableButton2 rota="/tabela"></SubmitDisableButton2>
        <SubmitButton text="Salvar" butSize="11%" butAlt="4vh" />
      </DivButn2>
      <Footador />
    </>
  );
}
