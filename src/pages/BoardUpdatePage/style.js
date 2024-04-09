import { css } from "@emotion/react";

export const layout = css`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;

`;

export const writePageTitle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    width: 1300px;
    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    font-size: 25px;
    font-weight: 600;
`;
export const titleButton = css`
    
& > button{
    width: 52px;
    height: 25px;
}
& > :nth-of-type(1){
    margin-right: 10px;
}
`;
export const inputBox = css`
width: 1010px;
height: 40px;
font-size: 17px;
border: none;
`
export const themaChoice = css`
display: flex;
align-items: center;
border-bottom: 1px solid #dbdbdb;
width: 1260px;
height: 60px;
    

`;
export const imgInsert = css`
width: 1260px;
height: 60px;
display: flex;
align-items: center;
border-bottom: 1px solid #dbdbdb;
`;

export const writeMain = css`
display: flex;
flex-direction: column;
width: 1260px;

font-size: 20px;
margin-top: 10px;
`;

export const mainInput = css`
width: 500px;
height: 40px;
border: none;
border-bottom: 1px solid #dbdbdb;
`;