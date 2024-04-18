import { css } from "@emotion/react";

export const layout = css`
    margin: 60px auto 0px;
    width: 70%;
    min-height: 700px;
    display: flex;
    justify-content: space-between;
`;

export const leftTitle = css`
`;
export const mainLeftItem = css`
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 380px;
    margin-right: 20px;
`;

export const leftItemTitle = css`
    max-height: 10px;
    margin-right: 20px;
    & > * {

        font-size: 30px;
        margin: 10px;
        color: green;
    }
`;

export const leftItemContent = css`

    & > div{
        margin-bottom: 10px;
    }
    & > div:nth-of-type(2){
        margin-bottom: 20px;
    }
    & > div:nth-of-type(3){
        margin-bottom: 20px;
        color: rgb(128 128 128);
    }

`;

export const dataInputBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 130px;
    margin-top: 20px;
    border-radius: 20px;
    min-width: 380px;
    background-color: rgb(248 248 248);
`;

export const dataInputItem = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 20px 10px 10px 10px;
    
`;

export const mainRightLayout = css`
    width: 60%;
    min-width: 700px;
    
`;
export const serviceTitle = css`
    min-width: 150px;
`;
export const mainRightButton = css`
    position: relative;
    display: flex;
`;

export const searchTeacherButton = css`
    box-sizing: border-box;     
    position: absolute;
    left: 0px;
    margin-top: 16px;
    padding:20px;
    border-radius: 20px;
    width: 50%;
    height: 250px;
    border: 1px solid #dbdbdb;
    background-color: #EEFCFA;
    color: #11b69a;
    font-weight: 700;
    `;

export const searchMypageButton = css`
    position: absolute;
    left: 400px;
    box-sizing: border-box;     
    margin-top: 16px;
    padding:20px;
    border-radius: 20px;
    width: 50%;
    height: 120px;
    border: 1px solid #dbdbdb;
    background-color: #EAFBFF;
    color: #0094ff;
    font-weight: 700;
`;
export const searchStudyButton = css`
    position: absolute;
    top: 280px;
    left: 0;
    box-sizing: border-box;     
    padding: 20px;
    border-radius: 20px;
    width: 50%;
    height: 120px;
    border: 1px solid #dbdbdb;
    background-color: #FFF8EA;
    color: #FF6D00;
`;

export const searchCommunityButton = css`
    position: absolute;
    top: 150px;
    left: 400px;
    box-sizing: border-box;     
    padding:20px;
    border-radius: 20px;
    width: 50%;
    height: 250px;
    border: 1px solid #dbdbdb;
    background-color: #FFF7F8;
    color: #FF1F70;
    `;
