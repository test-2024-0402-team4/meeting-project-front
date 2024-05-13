import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    background-color: #86e8bf;
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
        background-color: #59dbba;
    }
    &:active {
    background-color: #28b290; 
}
    
`;

export const boardListLayout = css`
    box-sizing: border-box;
    width: 100%;
    height: 510px;
    max-width: 1100px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    overflow: hidden;
    
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
    padding-bottom: 10px;
    margin-right: 20px;
`;
export const searchContainer = css`
    display: flex;
    border: 1px solid #a19c9c;
    width: 199px;
    padding-left: 2px;
    padding-bottom:1px ;
    border-radius: 5px;
    justify-content: space-between;
`;
export const inputBox = css`
    outline: none;
    border: none;
    width: 120px;
`;
export const searchButton = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 7px;
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 7px;
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
`;
export const boardListItem = css`

    cursor: pointer;
    color: #222;
    text-decoration: none;
    &>li{
        display: flex;
        width: 100%;
        border-bottom:1px solid #dbdbdb ;
        &:hover{
            background-color: #eeefef;
        }

        & > div{
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 51px;
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
    }
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
    margin-right: 70px;
    text-decoration: none;
`;
export const writeButton = css`
    width: 90px;
    height: 40px;
    background-color: #86e8bf;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
            background-color: #59dbba;
        }
    &:active {
        background-color: #28b290; 
    }
`;
