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
    padding: 28px 20px 0px 30px;
    width: 300px;
    height: 350px;
    min-width: 255px;
    border: 1px solid #dbdbdb;
    margin-top: 63px;
    border-radius: 4px;

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
    right: -5px;
    align-items: flex-end;
    & > button {
        width: 100%;
        height: 28px;
        color: #444444;
        font-size: 12px;
        background-color: transparent;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            background-color: #f3f3f3;
        }
    }
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
export const gender = css`
margin-left: 30px;
`;
export const email = css`
margin-top: 10px;
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
        text-decoration: none;
        min-width: 80px;
        cursor: pointer;

    }

    & > div:nth-of-type(1) {
    }
    & > div:nth-of-type(2) {

    }
`;

export const mypageContent = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 100%;
    min-height: 400px;
    border-radius: 4px;
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
padding-right: 0px;
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

export const noSearch = css`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
padding-top: 25px;
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

export const imgLayout = css`
    box-sizing: border-box;
    display: flex;
    width: 100px;
    height: 100px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > img {
        border-radius: 8px;
        height: 100%;
    }
`;

export const teacherProfile = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 122px;
    padding: 10px 0px 10px 10px;
    border-bottom: 1px solid #dbdbdb;
`;

export const teacherProfile2 = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    height: 122px;
    padding: 10px 0px 10px 10px;
    border-bottom: 1px solid #dbdbdb;
`;

export const teacherProfileContent = css`
    box-sizing: border-box;
    margin-left: 16px;
    width: 100%;
    height: 100%;
    cursor: pointer;

    div:nth-of-type(1) {
        font-size: 15px;
        color: #444444;
        font-weight: 700;
    }
    div:nth-of-type(2) {
        margin-top: 5px;
        font-size: 15px;
        color: #444444;
    }
    div:nth-of-type(3) {
        margin-top: 5px;
        font-size: 14px;
        color: #444444;
        & > * {
            margin-right: 5px;
        }
    }
    div:nth-of-type(4) {
        margin-top: 5px;
        font-size: 14px;
        color: #444444;
        & > * {
            margin-right: 5px;
        }
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
            background-color: #e9ebeb;
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