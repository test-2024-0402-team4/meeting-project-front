import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
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


    & > div:nth-of-type(2) {
        display: block;
        position: absolute;
        font-size: 20px;
        font-size: 700;
        top: 170px;
    }
    & > div:nth-of-type(3) {
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
    
    & > div {
        margin-left: 20px;

        padding-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        height: 25px;
        border-bottom: 2px solid black ;
    }

    & > div:nth-of-type(0) {
        text-decoration: underline;
    }
    & > div:nth-of-type(1) {

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
export const Postercontent = css`
    color: #aaaaaa;

    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 100%;
        font-size: 15px;
        
    }
    
`;

