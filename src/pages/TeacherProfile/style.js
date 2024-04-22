import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 800px;
    font-size: 12px;
    display: flex;
`;
export const teacherProfileRootLayout = css`
    box-sizing: border-box;
    height: 100%;
    border-right: 1px solid #dbdbdb;
`;
export const teacherProfile= css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 28px 20px 40px 0px;
`;
export const profileHeader= css`
    width: 300px;
    flex-direction: column;
    display: flex;
    align-items: center;
`;

export const imgBox = css`
    width: 152px;
    height: 152px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
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

export const applyButton = css`
    margin-top: 10px;
    padding: 12px 16px;
    width: 100%;
    height: 55px;
    background-color: #14dbba;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    :hover {
        background-color: #11b69a;
    }
`;

export const teacherInfoRootLayout = css`
    box-sizing: border-box;
    width: 100%;
    min-height: 620px;
    padding-top: 28px;
`;

export const teacherInfoContainer = css`
    width: 70%;
    height: 100%;
`;
export const teacherInfotitle = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #e5e7eb;
    
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