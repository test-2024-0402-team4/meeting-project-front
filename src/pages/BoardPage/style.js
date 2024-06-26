import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    
    width: 80%;
    max-width: 1100px;
    /* border: 1px solid #dbdbdb; */
    border-top: none;
    border-bottom: none;

    /* border: 1px solid black; */
`

export const authority = css`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 700;

    width: 100%;
    height: 50px;

    div{
        height: 30px;
        border: 1px solid #dbdbdb;
        margin-left: 10px;
        margin-right: 10px;
    }


    /* border: 1px solid black; */
`;

export const authorityButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    font-size: 20px;
    font-weight: 700;
    color: #b8b8b8;

    background-color: transparent;

    transition: background-color 0.3s ease;

    cursor: pointer;

    :hover{
        color: #808080;
    }

    border: none;

`;

export const showDate = css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    color: rgb(128,128,128);
    margin-bottom: 7px;
    margin-left: 10px;

    // 다하고 지우기 ---------------------------------
    /* border: 1px solid black; */
`;

export const boardPageTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 40px;

    /* border: 1px solid black; */
`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    margin-left: 5px;
    width: 100%;
    height: 100%;
    min-height: 500px;
    max-width: 1100px;
    // 다하고 지우기 -----------------------------------
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
`;

export const boardPageProfile = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 80px;

    // 다하고 지우기 --------------------------
    /* border: 1px solid black; */
`;

export const boardPageMainHeader = css`
    display: flex;
    align-items: center;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */
`;
export const boardPageProfileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;

    border-radius: 50%;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */

    & > img {
        width: 60px;
        height: 60px;
    }
`

// 헤드 오른쪽
export const optionButtons = css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 200px;
    height: 80px;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */
`;

export const modi = css`
    display: flex;
    justify-content: end;
    margin-right: 10px;
    margin-top: 10px;

    * {
        text-decoration: none;
    }

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */
`;
export const optionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    
    margin: 0px 0px 0px 10px;
    transition: background-color 0.3s ease;
    height: 30px;
    width: 50px;
    
    border: none;
    border-radius: 5px;
    
    background-color: #d9fcf6;
    color: #11b69a;
    font-size: 14px;
    
    cursor: pointer;

    &:hover {
        background-color: #9decdb;
    }

`;

export const buttonBox = css`
    display: flex;

    width: 300px;

    /* border: 1px solid black; */
`;
export const buttonLayout = css`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;

    & > a {
        text-decoration-line: none;
    }
`;

export const blank = css`

    display: flex;
    justify-content: end;
    margin-right: 10px;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const boardPageMain = css`
    display: flex;

    margin: 10px;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const boardPageViewCount = css`
    display: flex;
    justify-content: end;
    align-items: center;

    margin-right: 15px;
    margin-bottom: 5px;
    font-size: 14.6px;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const headbutton = css`
    display: flex;
    
    color: #7c7979;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;
export const viewIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;
    
    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const title = css`
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 6px;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */
`;

export const nick = css`
    font-size: 13px;
    display: flex;

    // 다하고 지우기 ---------------------------
    /* border: 1px solid black; */

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


