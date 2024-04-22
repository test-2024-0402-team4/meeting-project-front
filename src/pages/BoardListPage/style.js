import { css } from "@emotion/react";

export const layout = css`
margin: 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
`

export const authority = css`
display: flex;
justify-content: flex-start;
width: 100%;

`;



export const authorityButton = css`
    width: 100px;
    height: 50px;
    margin-left: 20px;
    &:nth-of-type(1){
    margin-left: 150px;
    }
    
`;

    export const boardListLayout = css`
    box-sizing: border-box;
    height: 500px;
    width: 1000px;
    border: 1px solid #97e5e7;
    
    `;
export const headerTitle = css`
    text-align: center;
    font-size: 40px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const searchInput = css`
display: flex;
justify-content: flex-end;
width: 74%;
padding-bottom: 10px;
`;
export const searchContainer = css`
border: 1px solid black;
width: 199px;
padding-left: 2px;
padding-bottom:1px ;
border-radius: 4px;
`;
export const inputBox = css`
outline: none;
border: none;
`;
export const searchButton = css`
box-sizing: border-box;
padding: 0px 0px 0px 12px;
background-color: white;
border: none;
cursor: pointer;
`;

export const boardListHeader = css`
box-sizing: border-box;
display: flex;
width: 100%;
border-bottom:2px solid #dbdbdb ;
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
& > div:nth-of-type(4){
    border-right: 1px solid #dbdbdb ;
    
    
}
`;
export const boardListItem = css`

   
    cursor: pointer;
    color: #222;
    text-decoration: none;
    &>li{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-bottom:1px solid #dbdbdb ;
        &:hover{
            background-color: beige;
        }

        & > div{
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 40px;
            width: 80px;
            flex-grow: 1;
           
            
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
        & > div:nth-of-type(4){
            border-right: 1px solid #dbdbdb ;
            
            
        }
    }

`;

export const test1 = css`
background-color: #97e5e7;
`

export const pageNumber = css`
padding: 15px;
`;

export const writeButtonLayout =css`
display: flex;
justify-content: flex-end;
width: 68%;
margin-top: 10px;
text-decoration: none;
`;
export const writeButton = css`
width: 90px;
height: 40px;
background-color: #59dbba;
border: none;
color: white;
font-size: 14px;
font-weight: 600;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color: #28b290; 
}
`;
