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

    export const boardListLayout = css`
    box-sizing: border-box;
    width: 100%;
    max-height: 1510px;
    max-width: 1100px;
    overflow: hidden;
    margin-left: 55px;
    
    `;
export const headerTitle = css`
    text-align: center;
    font-size: 38px;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #333333;
`;

export const searchInput = css`
display: flex;
justify-content: flex-end;
width: 100%;
padding-bottom: 15px;
margin-left: 25px;
`;
export const searchContainer = css`
border: 1px solid #a19c9c;
width: 201px;
padding-left: 2px;
padding-bottom:1px ;
border-radius: 6px;
`;
export const inputBox = css`
outline: none;
border: none;
`;
export const searchButton = css`
box-sizing: border-box;
padding: 0px 0px 0px 13px;
background-color: white;
border: none;
cursor: pointer;
`;

export const boardListHeader = css`
box-sizing: border-box;
display: flex;
width: 100%;
border-bottom:2px solid #b3d4d4 ;
& > div{
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 40px;
    width: 80px;
    flex-grow: 1;
    font-weight: 700;
    cursor: default;
}
& > div:nth-of-type(1){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 630px;
}
& > div:nth-of-type(2){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 130px;
}
& > div:nth-of-type(3){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 180px;
}
`;
export const boardListItem = css`

    cursor: pointer;
    color: #222;
    text-decoration: none;
    &>li{
        width: 99%;
        border: 2px solid #ebebeb ;
        font-family: Arial, sans-serif;
        list-style: none;
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        border-radius: 4px;
       
        

        & > div{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            
            height: 51.2px;
            width: 80px;
            flex-grow: 1;
           
            
        }
        & > div:nth-of-type(1){
            border-bottom: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 99%;
        }
        & > div:nth-of-type(2){
            flex-grow: 0;
            width: 99%;
        }
    }
`;

export const boardTitle = css`
min-height: 75px;
padding-left: 10px;
`;
export const genderImg = css`

& > img {
    width: 33px;
    height: 33px;
    margin-right: 10px;
}
`;

export const listBottom1 = css`
 display: flex;
 justify-content: space-between;
 padding-left: 5px;
`;
export const nick = css`
margin-right: 10px;
border-right: 1px solid #dbdbdb;
padding-right: 10px;
margin-top: 8px;

`
export const lc = css`
display: flex;
flex-direction: row;
justify-content: space-between;

`;
export const date = css`
margin-top: 8px;
`;
export const viewCount = css`
display: flex;
color: #979797;
margin-left: auto;
margin-top: 6px;
`
export const view = css`
margin-right: 6px;
margin-top: 2px;
`;
export const test1 = css`
background-color: #97e5e7;
`

export const pageNumber = css`
box-sizing: border-box;
padding: 15px;
`;

export const writeButtonLayout =css`
display: flex;
justify-content: flex-end;
width: 100%;
margin-top: 10px;
text-decoration: none;
margin-left: 25px;
`;
export const writeButton = css`
width: 90px;
height: 40px;
background-color: #14dbba;
border: none;
color: white;
font-size: 14px;
font-weight: 600;
border-radius: 5px;
transition: background-color 0.3s ease;
cursor: pointer;
&:hover {
        background-color: #11b69a;
    }
`;
