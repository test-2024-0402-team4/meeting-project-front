import { css } from "@emotion/react";

export const layout = css`
margin: 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
max-width: 1100px;

`;

export const writePageTitle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    font-size: 25px;
    font-weight: 600;
`;
export const titleButtons = css`
    
& > button{
    width: 52px;
    height: 30px;
}
& > :nth-of-type(1){
    margin-right: 10px;
}
`;

export const titleButton = css`
background-color: #14dbba;
outline: none;
border: none;
transition: background-color 0.3s ease;
border-radius: 6px;
color: white;
&:hover {
    background-color: #11b69a;
}
`;

export const inputBox = css`
width: 100%;
height: 40px;
font-size: 17px;
border: none;
`
export const themaChoice = css`
display: flex;
align-items: center;
border-bottom: 1px solid #dbdbdb;
width: 100%;
height: 60px;
    

`;
export const imgInsert = css`
width: 100%;
height: 60px;
display: flex;
align-items: center;
border-bottom: 1px solid #dbdbdb;
`;

export const writeMain = css`
display: flex;
flex-direction: column;
width: 100%;

font-size: 20px;
margin-top: 10px;
`;

export const mainInput = css`
width: 500px;
height: 40px;
border: none;
border-bottom: 1px solid #dbdbdb;
font-family: Arial, sans-serif;
`;

export const quill = css`
height: 100%;
`