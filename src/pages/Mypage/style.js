import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 618px;
    display: flex;
    justify-content: space-between;
`;
export const mypageLayout = css`
    display: flex;
    width: 100%;
`;
export const profileLayout = css`
    position: relative;
    box-sizing: border-box;
    padding: 28px 20px 0px 0px;
    width: 300px;
    min-width: 255px;
    border-right: 1px solid #dbdbdb;

`;
export const profile = css`
    position: sticky;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;


    & > div:nth-of-type(3) {
        display: block;
        position: absolute;
        font-size: 20px;
        font-size: 700;
        top: 170px;
    }
    & > div:nth-of-type(4) {
        position: absolute;
        top: 210px;
        font-size: 14px;
        font-size: 500;
        & > span:nth-of-type(1) {
            padding-right: 10px;
            border-right: 1px solid #dbdbdb;
        }
        & > span:nth-of-type(2) {
            padding-left: 10px;
        }

    }
`;
export const profileUpdateButton = css`
    position: absolute;
    right: 10px;
    align-items: flex-end;
`;

export const profileImgLayout = css`
    position: absolute;
    display: flex;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 100px;
    transform: translate(-50%, -50%);
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & > img{
        height: 100%;
    }
    
`;

export const roleName = css`
    background-color: #dbdbdb;
    padding: 3px;
    border-radius: 5px;
    font-size: 11px;
    margin-left: 7px;
`;

export const mypageContentLayout = css`

    width: 100%;
    min-width: 700px;
    box-sizing: border-box;

`;

export const mypageContentTitle = () => css`
    box-sizing: border-box;
    display: flex;
    padding-top: 28px;
    border-bottom: 1px solid #e5e7eb;
    & > div {
        padding: 0px 20px 10px;
        font-size: 16px;
        font-weight: 600;
        height: 25px;
        text-decoration: underline;
        min-width: 80px;

    }

    & > div:nth-of-type(0) {
        text-decoration: underline;
    }
    & > div:nth-of-type(1) {

    }
`;

export const mypageContent = css`
    box-sizing: border-box;
    width: 100%;
    min-height: 554px;
    background-color: rgb(248 248 248);
`;

export const contentListLayout = css`
height: 438px;
`;
export const searchButton = css`
box-sizing: border-box;
padding: 0px 0px 0px 7px;
background-color: white;
border: none;
cursor: pointer;
`;

export const searchInput = css`
display: flex;
justify-content: flex-end;
width: 100%;
padding-bottom: 10px;
`;

export const searchContainer = css`
border: 1px solid #a19c9c;
width: 199px;
padding-left: 2px;
padding-bottom:1px ;
border-radius: 4px;
`;

export const inputBox = css`
outline: none;
border: none;
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
    width: 650px;
}
& > div:nth-of-type(2){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 160px;
}
& > div:nth-of-type(3){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 130px;
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
            background-color: beige;
        }

        & > div{
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 42px;
            width: 80px;
            flex-grow: 1;
           
            
        }
        & > div:nth-of-type(1){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 650px;
        }
        & > div:nth-of-type(2){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 160px;
        }
        & > div:nth-of-type(3){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 130px;
        }
    }
`;
export const pageNumber = css`
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
`;

export const page = css`

`


