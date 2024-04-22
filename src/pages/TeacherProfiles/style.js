import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    font-size: 12px;
    display: flex;
    overflow: hidden;

`;

export const teacherProfilesRootLayout = css`
    width: 200px;
    height: 100%;
`;

export const filterLayout = css`
    box-sizing: border-box;
    position: fixed;
    margin-top: 20px;
    width: 150px;
    height: 500px;
    flex-direction: column;
    z-index: 0;
`;

export const SearchNicknameLayout = css`
    flex-direction: column;
    padding-bottom: 15px;
    border-bottom: 1px solid #dbdbdb;
`;

export const SearchNickname = css`
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const SearchBox = css`
    display: flex;
    box-sizing: border-box;
    padding: 8px;
    background-color: rgb(248 248 248);
    border-radius: 8px;
    height: 30px;


    * {
        box-sizing: border-box;
        border: none;
        background-color: rgb(248 248 248);
        font-size: 12px;
        width: 100px;
        outline: none;
    }
    :nth-of-type(2) {
        box-sizing: border-box;
        cursor: pointer;  
    }
`;
export const filterContentLayout = css`
    margin-top: 10px;
    width: 100%;
    height: 100%;
`;

export const filterBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    height: 35px;
    border-radius: 8px;
    margin-top: 10px;
    color: #5d5d5d;
    background-color: rgb(248 248 248);
    cursor: pointer;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const teacherProfiles = css`
    width: 100%;
    padding: 18px 20px 0px 40px;
`;
export const teacherProfileContainer = css`
    width: 100%;
    height: 100%;
`;
export const teacherProfile = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 122px;
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #dbdbdb;
`;
export const imgLayout = css`
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;

    & > img {
        border-radius: 8px;
        height: 100%;
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
    }
    div:nth-of-type(4) {
        margin-top: 5px;
        font-size: 14px;
        color: #444444;
    }

`;