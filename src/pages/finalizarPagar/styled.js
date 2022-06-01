import styled from "styled-components";


export const DivCards = styled.div `
    display: flex;
    justify-content: space-between;
    height: 10%;
`
    
export const DivMeal = styled.div `
    width: 65%;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 5%;
`

export const MealName = styled.h3 `
    font-weight: 300;
    font-size: 2.5rem;
    font-family: Inter;
    color: var(--color-meal-name);
    margin-bottom: 1.5rem;
`

export const Titulo = styled(MealName) `
    font-weight: 400;
    margin-top: ${props => props.marginT};
`

export const Subtitulo = styled(Titulo) `
    font-size: 1.5rem;
    margin-bottom: 3rem;
`

export const PriceFras = styled.p `
    font-family: Inter;
    font-size: 2rem;
    font-weight: 400;
`

export const Value = styled.span `
    font-family: Inter;
    font-size: 2rem;
    font-weight: 400;
    color: var(--color-green)
`

export const DivPrice = styled.div `
    padding: 3% 0% 0% 0%;    
    height: 10rem;
    display: flex;
    justify-content: space-between;
`

export const DivButns = styled(DivPrice) `
    flex-direction: row;
    width: 45rem;
`