import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    min-height: 618px;
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
    top: 20px;
    right: 20px;
    align-items: flex-end;
    & > button {
        width: 66px;
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

export const mypageContentLayout = css`

    width: 100%;
    min-width: 700px;
    box-sizing: border-box;

`;

export const mypageContentTitle = () => css`
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    /* border: 1px solid black; */

    div:nth-of-type(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;

        font-size: 16px;

        min-width: 80px;
        color: #aaaaaa;

        /* border: 1px solid black; */
        background-color: transparent;
        cursor: pointer;

        :hover{
            font-weight: 700;
            color: #9e9e9e;
        }
        
    }
    div:nth-of-type(2){
        height: 40px;
        margin-top: 10px;
        border: 1px solid #dbdbdb;
    }
    div:nth-of-type(3) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;

        font-size: 16px;

        min-width: 80px;
        color: #aaaaaa;

        /* border: 1px solid black; */
        background-color: transparent;
        cursor: pointer;

        :hover{
            font-weight: 700;
            color: #9e9e9e;
        }
    }
    div:nth-of-type(4){
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;
    }
    div:nth-of-type(5){
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;
        /* border: 1px solid black; */

    }
    div:nth-of-type(6){
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;
        /* border: 1px solid black; */

    }
    div:nth-of-type(7){
        margin: 0px 20px 0px 20px;

        height: 60px;
        width: 100px;
        /* border: 1px solid black; */

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
    display: flex;
    align-items: center;
    font-size: 15px;
    height: 31px;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
    border-top-left-radius: none;
    border-bottom-left-radius: none;
    cursor: pointer;
`;

export const searchInput = css`
    display: flex;
    justify-content: end;
    align-items: center;
    
    margin-right: 40px;
    width: 700px;
    /* border: 1px solid #dbdbdb; */
`;

export const searchContainer = css`
`;

export const inputBox = css`
    border: 1px solid #dbdbdb;
    border-top-right-radius: none;
    border-bottom-right-radius: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    height: 27px;
    outline: none;
    padding-left: 10px;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 28px 20px 40px 0px;
`;

export const profileHeader= css`
    flex-direction: column;
    display: flex;
    align-items: center;
`;

export const imgBox = css`
    
    & > * {
        height: 100%;
    }
`;

export const profileContent = css`
    width: 100%;
    margin-top: 20px;
    div:nth-of-type(1) {
        font-size: 20px;
    }
    div:nth-of-type(2) {
        font-size: 16px;
        margin-top: 5px;
        & > span:nth-of-type(1) {
            margin-right: 5px;
        }
    }
    div:nth-of-type(3) {
        display: flex;
        margin-top: 5px;
        font-size: 14px;
      span:nth-of-type(1) {
        font-size: 14px;
        box-sizing: border-box;
        width: 52px;
        height: 20px;
        margin: 0px 5px;
      }
      span:nth-of-type(2) {
        font-size: 14px;
      }
    }
    div:nth-of-type(4) {
        display: flex;
        margin-top: 3px;
        font-size: 14px;
      span:nth-of-type(1) {
        font-size: 14px;
        box-sizing: border-box;
        width: 52px;
        height: 20px;
        margin: 0px 5px;
      }
      span:nth-of-type(2) {
        font-size: 14px;
      }
        
    }
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

export const teacherInfoLayout = css`
    box-sizing: border-box;
    padding: 20px 16px 24px;
    width: 100%;
    min-height: 144px;
    border-bottom: 1px solid #dbdbdb;
    

`;
export const teacherInfo = css`
    font-size: 16px;
    font-weight: 500;
`;
export const teacherInfoContent = css`
    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 84px;
        font-size: 15px;
        
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-size: 15px;
    }
`;


