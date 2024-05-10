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
width: 100%;
height: 40px;
outline: none;
border: none;
border-bottom: 1px solid #dbdbdb;
font-size: 15px;
`;

export const writeContent = css`
display: flex;
flex-direction: column;
width: 100%;
font-size: 20px;
margin-top: 10px;
margin-bottom: 20px;
`;

export const contentInput = css`

width: 100%;
height: 500px;
outline: none;
border: 1px solid #dbdbdb;
resize: none;
padding-top: 20px;
font-size: 15px;
font-style: normal;

`;

export const quill = css`
height: 100%;
`