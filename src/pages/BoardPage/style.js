import { css } from "@emotion/react";

export const layout = css`
margin: 0px auto;
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
max-width: 1100px;
`

export const authority = css`
width: 100%;
margin-right: 270px;
justify-content: space-evenly;
`;

export const authorityButton = css`
width: 100px;
    height: 40px;
    margin-top: 5px;
    margin-left: 20px;
    margin-bottom: 20px;
    background-color: #14dbba;
    outline: none;
    border: none;
    border-radius: 6px;
    color: white;
    transition: background-color 0.3s ease;
    font-weight: 600;
    cursor: pointer;
    &:nth-of-type(1){
    margin-left: 150px;
    }
    &:hover {
        background-color: #11b69a;
    }
`;

export const showDate = css`
display: flex;
justify-content: flex-end;
width: 100%;
color: rgb(128,128,128);
margin-bottom: 7px;
margin-left: 10px;
`;

export const boardPageTitle = css`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 40px;
border: 1px solid black;
`;

export const boardListLayout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: 500px;
    max-width: 1100px;
    border: 1px solid #85d3d6;
    border-radius: 10px;
    margin-left: 35px;
`;

export const boardPageProfile = css`
box-sizing: border-box;
display: flex;
border-bottom: 1px solid #dbdbdb;
width: 100%;
height: 80px;
align-items: center;
margin-top: 5px;
`;

export const boardPageMainHeader = css`
box-sizing: border-box;
display: flex;
align-items: center;
width: 650px;

`;
export const boardPageProfileImg = css`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-left: 18px;
margin-right: 20px;
margin: 10px 20px 15px 18px;
& > img {
    width: 60px;
    height: 60px;
}
`
export const optionButtons = css`
margin-top: 4px;
margin-left: 355px;
`;
export const optionButton = css`
border: none;
outline: none;
color: #7c7979;
background-color: white;
cursor: pointer;
border-radius: 5px;
height: 25px;
transition: background-color 0.3s ease;
&:nth-of-type(1){
    margin-left: 1px;
    }
&:hover {
    background-color: #86e8bf;
}
&:active {
    background-color: #55bd92;
}
`;
export const blank = css`
margin-top: 5px;
margin-left: 39px;
`;

export const boardPageMain = css`
display: flex;
width: 95%;
height: 80%;
align-items: flex-start;
font-family: Arial, sans-serif;
margin: 10px 20px 15px 23px;
`;

export const boardPageViewCount = css`
display: flex;
justify-content: center;
align-items: center;
color: #7c7979;
margin-bottom: 10px;
margin-left: 28px;
`;

export const viewIcon = css`
margin-top: 7px;
margin-right: 7px;
`;

export const title = css`
font-size: 17px;
margin-bottom: 6px;
`;
export const nick = css`
font-size: 13px;
font-family: Arial, sans-serif;
display: flex;
& > div:nth-of-type(1){
    margin-right: 8px;
}
& > div:nth-of-type(2){
    margin-right: 8px;
    margin-top: 3px;
}
& > div:nth-of-type(3){
    margin-right: 8px;
}
`;



