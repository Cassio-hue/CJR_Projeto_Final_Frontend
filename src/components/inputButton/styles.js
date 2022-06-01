import styled from "styled-components";
/* fora do combinado*/
export const DoubleButton = styled.div `
    width: 50%;
    border: 1px solid #6A6A6A;
    display: flex;
    border-radius: 0px 5px 5px 0px;
    flex-direction: inline;
`

export const InputBox = styled.input`
    padding: 1rem;
    font-size: 1.2rem;
    box-sizing: border-box;
    border: 1px solid #2F2F2F;
    border-radius: 5px;
    outline: none;
    width: ${props => props.size};
    height: ${props => props.altr};
`

export const GrayInput = styled.div `
    font-family: Inter;
    color: #black;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: #B7B7B7;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid #2F2F2F;
    width: 100%;
    height: 55%;
    border-radius: 5px;
`
    
export const WhiteInput = styled(GrayInput) `
    border-radius: 5px 0px 0px 5px;
    color: #8C8B8B;
    background-color: #FFFFFF;
    border-width: 0;
 `
    
export const Button = styled.button `
    height: 6vh;
    width: 100%;
    font-size: 1.2rem;
    font-family: Inter;
    border-radius: 5px;
    cursor: pointer;
    `
    
export const SendButton = styled(Button) `
    color: #FFFFFF;
    border: 1px solid #28A745;
    background: #28A745;
    width: ${props => props.size};
    height: ${props => props.altura};
`
    
export const SendBordButton = styled(Button).attrs(props => ({
    type: "submit",
    size: props.size,
    altura: props.altura,
})) `
    color: #28A745;
    border: 1px solid #28A745;
    background: #FFFFFF;
    width: ${props => props.size};
    height: ${props => props.altura};
`
    
export const DisableButton = styled(Button) `
    background: #868E96;
`
    
export const DoubleDisableButton = styled(Button) `
    font-size: 1.3rem;
    height: auto;
    width: 20%;
    background: #C4C4C4;;
    border-radius: 0px 5px 5px 0px;
`

export const SelectIpt = styled.select `
    -webkit-appearance: none;
    padding: 1rem;
    font-size: 1.2rem;
    box-sizing: border-box;
    border: 1px solid #2F2F2F;
    border-radius: 5px;
    width: 100%;
    height: 55%;
    overflow: hidden;
    background: var(--arrow-select-input) no-repeat right;
    outline: none;
`

export const LabelFile = styled.label `
    font-size: 1.2rem;
    font-family: Inter;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.3rem;
    height: auto;
    word-break: break-word;
    width: 30%;
    background: #C4C4C4;;
    border-radius: 0px 5px 5px 0px;
`

export const SelectIpt1 = styled(SelectIpt)`
    padding: 0 1rem;
    font-size: auto;
`

export const GrayInput1 = styled(GrayInput)`
    padding: 9px 11px;
    font-size: auto;
`

export const DisableButton2 = styled(DisableButton) `
    background: #868E96;
    margin-bottom: 36px;
    color: white;
    width: 50%;
    height: 4vh;
    margin-right: 160px;
    margin-left: 160px; 
`