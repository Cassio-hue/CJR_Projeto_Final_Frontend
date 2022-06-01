import React from 'react';
import {
    InputBox,
    SendButton,
    SendBordButton,
    DisableButton,
    DisableButton2,
    SelectIpt1,
    GrayInput1,
    WhiteInput,
    DoubleButton,
    LabelFile,
} from './styles';

import { Link } from 'react-router-dom';

export function Input({tipo, inpWidth, inpAltura, onChange, placeHolder}) {
    return <InputBox type={tipo} size={inpWidth} altr={inpAltura} onChange={onChange} placeholder={placeHolder}></InputBox>;  
}

export function SubmitButton({text, butSize, butAlt, onClick}) {
    return <SendButton size={butSize} altura={butAlt} onClick={onClick}>{text}</SendButton>;
}

export function SubmitBordButton({text, butSize, butAlt}) {
    return <SendBordButton type="submit" size={butSize} altura={butAlt}>{text}</SendBordButton>;
}

export function SubmitDisableButton() {
    return <DisableButton type="submit">General purpose button</DisableButton>;
}

export function SubmitDisableButton2({rota}) {
    return <Link to={rota}><DisableButton2 type="submit">Voltar</DisableButton2></Link>;
}

export function SelectInput() {
    return (
        <SelectIpt1>
            {/*Adicionar os options*/}
            <option>pedro</option>
            <option>ronaldo</option>
            <option>admin</option>
        </SelectIpt1>
    );
}

export function DisableInput() {
    return <GrayInput1>11/09/2001</GrayInput1>;
}

// Esse input de arquivos não está funcionando!!! 
export function SearchLocalInput({ onFileSelect }) {
    let fileInput = 'Escolher aquivo...';

    return (
        <>
            <DoubleButton>
                <WhiteInput id={'file-name'}>{fileInput}</WhiteInput>
                <LabelFile for="file-input">Escolher</LabelFile>
                <InputBox
                    type="file"
                    style={{ display: 'none' }}
                    id={'file-input'}
                />
            </DoubleButton>
        </>
    );
}
