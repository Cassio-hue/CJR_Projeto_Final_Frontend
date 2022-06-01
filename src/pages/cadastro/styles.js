import styled from "styled-components";

export const ImgSty = styled.header `
    background-image: var(--img-tela-login);
    background-size: cover;
    background-position: center;
    width: 55vw;
    height: 100vh;
`

export const Titulo = styled.p `
    font-size: 3.4vw;
    color: var(--login-color);
`

export const DivColums = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: colums;
    font-family: 'Markazi Text', serif;
`

export const DivMother = styled.div `
    width: 20%;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:auto;
`

export const DivSon = styled.div `
    padding: 1rem 0 1rem 0;
    border-top: solid 1px #6A6A6A;
`

export const Form = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const LabelSty = styled.label `
    margin-top: 1.1rem;
    margin-bottom: .4rem;
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    color: #6A6A6A;
`

export const InputSty = styled.input `
    -webkit-appearance: none;
    padding: .1rem;
    border: 2px solid black;
    border-radius: 4px;
`

export const P = styled.p `
    font-family: Inter;
    font-size: 24px;
    color: #6A6A6A
`

export const DivButt = styled.div `
    margin-top: 2rem;
    margin-bottom: 2rem;
`