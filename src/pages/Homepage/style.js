import { css } from "@emotion/react";

export const layout = css`
    margin: 10px auto ;
    width: 70%;
    min-height: 900px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
`;

export const main = css`
    display: flex;
    
    height: 430px;
    width: 100%;
    min-width: 1300px;

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
`;

export const leftTitle = css`
    margin-left: 20px;
    color: #242424;
    font-size: 18px;
    font-weight: 700;
`;
export const mainLeftItem = css`
    display: flex;
    flex-direction: column;
    width: 530px;
    min-width: 380px;
    margin-right: 30px;
    margin-top: 20px;

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
`;

export const leftItemTitle = css`
    height: 0px;
    margin-right: 20px;
    background-color: rgb(248 248 248);

    & :hover {
        background-color: #f0f0f0;
    }
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
        color: rgb(128 128 128);
    }
`;

export const dataInputBox = css`
    box-sizing: border-box;
    width: 450px;
    height: 130px;
    margin: 10px 20px;
    border-radius: 5px;

    min-width: 400px;
    background-color: rgb(248 248 248);
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
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
    margin-top: 20px;

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
    
`;
export const serviceTitle = css`
    min-width: 150px;
    /* border: 1px solid black; */
`;

export const serviceBox = css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 400px;

    /* border: 1px solid red; */
`;

export const mainRightButton = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    height: 400px;

    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid red; */
`;

export const button1 = css`
    display: flex;
    justify-content: space-around;
    
    // 다하고 지우기 ----------------------------------------
    /* border: 1px solid black; */
    div:nth-of-type(1) {
        margin-right: 15px;
    }
    div:nth-of-type(2) {
        margin-left: 15px;
}
`;

export const searchTeacherButton = (roleId) => css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    left: 0px;
    padding:20px;
    border-radius: 5px;
    width: 355px;
    height: 185px;
    border: 1px solid #dbdbdb;
    background-color: #EEFCFA;
    color: #11b69a;
    font-weight: 700;
    cursor: pointer;

    :hover{
        span:nth-of-type(1){
            text-decoration: underline;
            text-underline-position: under;
        }
    }
    `;

export const searchMypageButton = (roleId) => css`
    display: flex;
    justify-content: space-between;
    left: 52%;
    box-sizing: border-box;
    padding:20px;
    border-radius: 5px;
    width: 355px;
    height: 185px;
    border: 1px solid #dbdbdb;
    background-color: #EAFBFF;
    color: #0094ff;
    font-weight: 700;
    cursor: pointer;
    
    :hover{
        span:nth-of-type(1){
            text-decoration: underline;
            text-underline-position: under;
        }
    }
`;
export const searchStudyButton = css`
    display: flex;
    justify-content: space-between;
    top: 280px;
    left: 0;
    box-sizing: border-box;     
    padding: 20px;
    border-radius: 5px;
    width: 355px;
    height: 185px;
    border: 1px solid #dbdbdb;
    background-color: #FFF8EA;
    color: #FF6D00;
    font-weight: 700;
    cursor: pointer;

    :hover{
        span:nth-of-type(1){
            text-decoration: underline;
            text-underline-position: under;
        }
    }
`;


export const serviceIcon = css`
    display: flex;
    align-items: end;
`;

export const searchCommunityButton = (roleId) => css`
    display: flex;
    justify-content: space-between;
    top: 150px;
    left: 52%;
    box-sizing: border-box;
    padding:20px;
    border-radius: 5px;
    width: 355px;
    height: 185px;
    border: 1px solid #dbdbdb;
    background-color: #FFF7F8;
    color: #FF1F70;
    font-weight: 700;
    cursor: pointer;

    :hover{
        span:nth-of-type(1){
            text-decoration: underline;
            text-underline-position: under;
        }
    }
`;

export const span = css`
    color: #242424;
    margin-left: 17px;
    font-size: 18px;
    font-weight: 700;
`;

export const bottom = css`
    display: flex;
    flex-direction: column;
    margin: 10px 20px 0px 20px;
    min-width: 1300px;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

`;

export const profileCard = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 1200px;

    width: 100%;
    height: 300px;
    background-color: rgb(248 248 248);

    /* border: 1px solid #dbdbdb; */
`;

export const card = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 400px;
    min-width: 270px;
    height: 270px;
    margin: 0px 10px 0px 10px;

    // 다하고 지우기 ----------------------------------------
    border: 1px solid #dbdbdb;
    border-radius: 5px;
`;

export const photo = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 180px;
    height: 230px;

    /* border: 1px solid #dbdbdb; */
`;

export const subinfo = css`

    display: flex;
    flex-wrap: wrap;
    width: 180px;
    height: 230px;

    padding: 0px 5px;

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    span{
        font-size: 16px;
        font-weight: 500;
    }
`;

export const Link = css`
    margin-left: 10px;
    color: #aaaaaa;
    text-decoration: none;
    :hover{
        font-weight: 700;
        text-decoration: underline;
    }
`;

export const explain = css`
    display: flex;
    flex-direction: column;

    /* border: 1px solid black; */
    span:nth-of-type(1){
        font-size: 18px;
    }

    span:nth-of-type(2){
        margin-top: 5px;
        color: #808080;
        font-size: 13px;
    }
`;