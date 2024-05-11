import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    min-height: 618px;
    display: flex;
    justify-content: space-between;
    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */
`;
export const mypageLayout = css`
    display: flex;
    width: 1300px;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */
`;
export const profileLayout = css`
    position: relative;
    box-sizing: border-box;
    width: 300px;
    height: 305px;
    
    max-height: 375px;
    min-width: 255px;

    margin-top: 60px;
    padding-top: 30px;

    border: 1px solid #dbdbdb;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */

`;
export const profile = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */


    & > div:nth-of-type(3) {
        display: block;
        position: absolute;
        font-size: 20px;
        font-size: 700;
        top: 170px;

        /* border: 1px solid black; */
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
    right: 10px;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */

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

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */

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
    border-left: 1px solid #dbdbdb;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const mypageContentTitle = () => css`
    display: flex;

    // 다하고 지우기 ---------------------------
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
            color: #5d5b5b;
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
            color: #5d5b5b;
        }
    }
    div:nth-of-type(4){
        height: 40px;
        margin-top: 10px;
        border: 1px solid #dbdbdb;
    }
    div:nth-of-type(5){
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
            color: #5d5b5b;
        }

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
    border: 1px solid #dbdbdb;
    border-left: none;
    box-sizing: border-box;
    width: 100%;
    min-height: 400px;

    /* border: 1px solid black; */
`;

export const contentListLayout = css`
    height: 438px;
`;
export const searchButton = css`
    display: flex;
    align-items: center;
    font-size: 15px;
    border: 1px solid #dbdbdb;
    height: 30px;
    background-color: white;
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
    
    margin-right: 35px;
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
    height: 26px;
    outline: none;
    padding-left: 10px;
    border-right: none;
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

    // 다하고 지우기 ---------------------
    /* border: 1px solid black; */
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
    margin-top: 103px;
    margin-left: 35px;

    // 다하고 지우기 ---------------------
    /* border: 1px solid black; */
`;

export const nickname = css`
    display: flex;
    justify-content: center;
    padding-right: 15px;

    font-size: 20px;
    font-weight: 700;
    color: #5d5d5d;

    margin-bottom: 15px;

    // 다하고 지우기 ---------------------
    /* border: 1px solid black; */
`;

export const a = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    color: #5d5d5d;

    margin-bottom: 5px;

    /* border: 1px solid black; */

    span:nth-of-type(1) {
        /* border: 1px solid black; */

    }
    span:nth-of-type(2) {
        padding-left: 20px;
        /* border: 1px solid black; */
    }
`;
export const b = css`
    display: flex;
    color: #5d5d5d;

    margin-bottom: 5px;

    /* border: 1px solid black; */

    span:nth-of-type(1) {
        /* border: 1px solid black; */
        font-size: 16px;
    }
    span:nth-of-type(2) {
        /* border: 1px solid black; */
        padding-left: 10px;
        font-size: 15px;
    }
`;

export const c = css`
    display: flex;
    color: #5d5d5d;

    /* border: 1px solid black; */

    span:nth-of-type(1) {
        /* border: 1px solid black; */
        font-size: 16px;
    }
    span:nth-of-type(2) {
        /* border: 1px solid black; */
        padding-left: 10px;
        font-size: 15px;
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
            background-color: #e1f5fd;
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

    // 다하고 지우기 ---------------------------------
    /* border: 1px solid black; */
`;

export const page = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다하고 지우기 ---------------------------------
    /* border: 1px solid black; */
`

export const teacherInfoLayout1 = css`
    width: 100%;
    min-height: 144px;

    border-bottom: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;


    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;

export const teacherInfoLayout2 = css`
    box-sizing: border-box;
    width: 100%;
    min-height: 144px;
    border-bottom: none;

    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;

export const teacherInfoLayout = css`
    box-sizing: border-box;
    width: 100%;
    min-height: 144px;
    border-bottom: 1px solid #dbdbdb;

    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;

export const teacherInfo = css`
    font-size: 16px;
    font-weight: 600;

    margin: 15px;
    color: #242424;

    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;
export const arrowLocation = css`
    
`;

export const subject = css`
    color: #11b69a;
`;

export const teacherInfoContent = css`
    display: flex;
    margin-left: 15px;
    margin-bottom: 10px;
    width: 100%;

    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */

    div:nth-of-type(1) {
        width: 100px;
        font-size: 16px;
        color: #aaaaaa;

        // 다하고 지우기 ------------------------------
        /* border: 1px solid black; */
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-weight: 700;
        font-size: 15px;

        // 다하고 지우기 ------------------------------
        /* border: 1px solid black; */
    }
`;

export const teacherInfoContent2 = css`
    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 84px;
        font-size: 15px;
        margin-left: 5px;
        
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-size: 15px;
    }
`;


export const teacherInfoLayout6 = css`

    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    min-width: 700px;
    
    // 다하고 지우기 ------------------------
    /* border: 1px solid black; */
`;

export const introduce = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding-left: 15px;
    font-size: 15px;
    color: #5d5d5d;

    /* border: 1px solid black; */

`;