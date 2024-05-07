import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    font-size: 12px;
    display: flex;
    overflow: hidden;
    min-width: 1200px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const teacherProfilesRootLayout = css`
    width: 200px;
    height: 100%;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const filterLayout = css`
    box-sizing: border-box;
    position: fixed;
    flex-direction: column;

    margin-right: 10px;

    padding: 10px;

    width: 180px;
    height: 100%;
    z-index: 0;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const SearchNicknameLayout = css`
    flex-direction: column;
    padding-bottom: 15px;
    margin-top: 25px;
    border-bottom: 1px solid #dbdbdb;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const SearchNickname = css`
    box-sizing: border-box;
    margin-bottom: 10px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const SearchBox = css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px;
    background-color: rgb(248 248 248);
    border-radius: 8px;
    height: 30px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */

    * {
        box-sizing: border-box;
        border: none;
        background-color: rgb(248 248 248);
        font-size: 12px;
        outline: none;
    }
    :nth-of-type(2) {
        & > div {
            box-sizing: border-box;
            cursor: pointer;
        }
    }
`;
export const filterContentLayout = css`
    
    margin-top: 10px;
    width: 100%;
    height: 100%;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const filiterModal = (filterNum) => css`
    position: absolute;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 13px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */

    justify-content: ${filterNum === 1 ? "space-between" : ""};
    top: ${filterNum === 1 ? '145px' :
          filterNum === 2 ? '190px' :
          filterNum === 3 ? '235px' :
          filterNum === 4 ? '280px' :
          filterNum === 5 ? '325px' : '110px'};
    left: 180px;
    border: 1px solid #dbdbdb;
    width: ${filterNum === 1 ? "200px" : "250px"};
    height: ${filterNum === 1 ? "35px" : "38px"};
    border-radius: 5px;
`;

export const xMark = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
    margin-left: 10px;

    cursor: pointer;
    & > * {
        color: #aaaaaa;
        font-size: 18px;
        :hover{
            color: #5d5d5d;
        }
    }
`

export const filterBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    padding: 8px;
    font-size: 14px;
    width: 100%;
    height: 35px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
    border-radius: 5px;
    margin-top: 10px;
    color: #5d5d5d;
    background-color: rgb(248 248 248);
    cursor: pointer;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const teacherProfiles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    
    width: 100%;
    height: 100%;

    min-width: 710px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const profileTitle = css`
    width: 100%;
    height: 30px;

    margin-left: 20px;
    color: #5d5d5d;
    font-size: 20px;
    font-weight: 700;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const teacherProfileContainer = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    margin-bottom: 20px;
    margin-left: 20px;

    min-width: 710px;

    border-top: 1px solid #dbdbdb;

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
export const teacherProfileContent = css`
    box-sizing: border-box;
    margin-left: 16px;
    width: 100%;
    height: 100%;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
    cursor: pointer;

    div:nth-of-type(1) {
        font-size: 15px;
        color: #444444;
        font-weight: 700;
    }
    div:nth-of-type(2) {
        margin-top: 5px;
        font-size: 15px;
        color: #5d5d5d;
    }
    div:nth-of-type(3) {
        margin-top: 5px;
        font-size: 14px;
        color: #808080;
        & > * {
            margin-right: 5px;
        }
    }
    div:nth-of-type(4) {
        margin-top: 5px;
        font-size: 14px;
        color: #808080;
        & > * {
            margin-right: 5px;
        }
    }

`;