import styled from "styled-components";

export const Div_container = styled.div `
    width: 300px;
    height: 350px;
`

export const Card = styled.div `

    background-color: white;
    border: 1px solid #bacdd8;
    padding: 8px;
    border-radius: 12px;
`

export const Card_Name = styled.div `
    margin-top: none;
    font-size: 24px;
    font-weight: 600;
`

export const Card_Details = styled.div `

    padding: 16px 8px 8px 8px;
`

export const Card_buttons = styled.div `
    justify-content: space-between;
    display: flex;
`

export const Card_button = styled.button `
    border: none;
    padding: 12px 24px;
    border-radius: 50px;

    font-weight: 600;
    color: white;
    background-color: #E48900;
    margin: 0 auto;
    display: block;
    cursor: pointer;
`

export const Card_Description = styled.p `
    font-size: 14px;
    color: #7f8c9b;
    line-height: 150%;
`
export const Card_image = styled.img `
    width: 100%;
`

export const Card_price = styled(Card_Description) `
    color: green;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;    
    
`

export const Delete_button = styled(Card_button) `
    background-color: #CF2727;
`

export const Qtdade_itens_field = styled.input `
    width: 100%;
    color: black;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px solid #bacdd8;
`

export const Card_width = styled.div `
    max-width: 540px;
`

export const Card_text = styled.p `
    margin-bottom: 0;
`

export const Cardhor_image = styled.img `
    width: 100%;
    height: 100%; 
`

export const Card_title = styled.h5 `
    font-weight: bold;
    margin-top: 10px;
`

export const Card_adjust_itens = styled.div `
    margin-right: auto;
    margin-left: 20px
       
`
export const Cardhor_qtdade = styled(Card_text) `
    margin-top: 15px;
    margin-right: 30px;
`
export const Card_div = styled.div `
    flex-direction: row;
`

export const Qtdade_itens_field2 = styled(Qtdade_itens_field)`
    height: 26px;
`

export const Delete_button2 = styled(Delete_button) `
    padding: 1px 53px;
    border-radius: 7px;
    margin-left: 0  ;
`

export const Qtadebutton = styled(Delete_button2) `
    background-color: green;
    width: 100%;
    margin-top: 10px;
`