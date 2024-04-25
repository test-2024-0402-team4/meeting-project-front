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
    & > button {
        padding: 5px 10px;
        background-color: white;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        font-size: 12px;
        
        :hover{
            background-color: #f8f8f8;

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


export const studentInfoRootLayout = css`
    box-sizing: border-box;
    width: 100%;
    min-height: 620px;
    padding-top: 28px;
`;

export const studentInfoContainer = css`
    width: 70%;
    height: 100%;
`;
export const studentInfotitle = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    
    div:nth-of-type(1) {
        margin-left: 20px;
        padding-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        height: 25px;
        border-bottom: 2px solid black ;
    }


`;
export const studentInfoLayout = css`
    box-sizing: border-box;
    padding: 10px 16px 24px;
    width: 100%;
    min-height: 144px;
    border-top: 1px solid #dbdbdb;


`;
export const studentInfo = css`
    font-size: 16px;
    font-weight: 500;
`;
export const studentPosterInfo = css`

    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
`;
export const studentInfoContent = css`
    color: #aaaaaa;

    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 84px;
        font-size: 15px;
        
        
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-size: 14px;
    }
`;

export const buttonLayout = css`
    & > button {
        font-size: 15px;
        width: 80px;
        height: 30px;
        background-color: #d9fcf6;
        color: #11b69a;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        :hover {
            background-color: #9decdb;
        }
    }
    button:nth-of-type(2) {
        margin-left: 10px;
    }
`

