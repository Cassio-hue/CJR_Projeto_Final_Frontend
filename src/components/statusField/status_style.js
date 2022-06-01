import styled from "styled-components";

export const StatusStatus = styled.div `
    max-width: 142px;
    height: 22px;
    background: #009406;
    border: 1px solid #009406;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    left: 12%;
    right: 11.33%;
    top: 17.14%;
    bottom: 20%;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    /* identical to box height, or 22px */
    align-items: center;
    text-align: center;
    align-content: center;
    color: #FFFFFF;
`
export const StatusPendentetxt = styled(StatusStatus) `
    background: #264FBA;
    border: 1px solid #264FBA;
`
export const StatusCanceladotxt = styled(StatusStatus) `
    background: #C90000;
    border: 1px solid #C90000;
`