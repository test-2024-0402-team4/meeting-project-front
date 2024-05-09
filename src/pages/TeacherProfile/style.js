import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    min-height: 800px;
    font-size: 12px;
    display: flex;
`;
export const teacherProfileRootLayout = css`
    box-sizing: border-box;
    height: 100%;
    border-right: 1px solid #dbdbdb;
`;



export const emailApplyLayout = css`
    position: absolute;
    left: 30%;
    top: 150px;
    width: 450px;
    height: 500px;
    border: 1px solid #dbdbdb;
    background-color: white;
    border-radius: 4px;

    & > h1 {
        margin: 10px;
    }
`;




export const studentInfo = css`
    box-sizing: border-box;
    
    width: 100%;
    font-size: 16px;
    margin: 10px;
`;

export const selectLayout = css`
    margin: 10px;

    & > input {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            height: 35px;
            border: 1.5px solid #9decdb;
            border-radius: 4px;
            font-size: 15px;
            color: #808080;
            outline: none;
        }
`

export const applyButtonLayout = css`
    width: 100%;
    height: 50px;
    display: flex;
    
    & > button {
        margin: 30px 10px 0px 10px;
        box-sizing: border-box;
        color: #11b69a;
        text-align: center;
        justify-content: center;
        width: 47%;
        height: 100%;
        border-radius: 4px;
        border: none;
        background-color: #d9fcf6;
        cursor: pointer;

        :hover{
            background-color: #9decdb;
        }
        
    }
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
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;
export const profileContent = css`
    width: 100%;
    margin-top: 20px;
    div:nth-of-type(1) {
        font-size: 20px;
        font-weight: 700;
        color: #5d5d5d;
    }
    div:nth-of-type(2) {
        font-size: 15px;
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
    background-color: #d9fcf6;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    color: #11b69a;
    cursor: pointer;
    :hover {
        background-color: #9decdb;
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
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
    
    & > div:nth-of-type(1) {
        margin-left: 20px;
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #242424;
        height: 25px;
        border-bottom: 2px solid black;
    }

    & > div:nth-of-type(0) {
        text-decoration: underline;
    }
`;

export const buttonLayout = css`
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    & > button {
        font-size: 15px;
        width: 100%;
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
export const teacherInfoLayout = css`
    box-sizing: border-box;
    padding: 20px 16px 5px 20px;
    width: 100%;
    min-height: 144px;
    min-width: 700px;
    border-bottom: 1px solid #dbdbdb;

    div:nth-of-type(4){
        margin-bottom: 20px;
    }
    /* border: 1px solid black; */
`;

export const teacherInfo = css`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #242424;
`;
export const teacherInfoContent = css`
    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 100px;
        font-size: 15px;
        color: #aaaaaa;
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-weight: 700;
        font-size: 15px;
    }
`;

export const teacherInfoContent5 = css`
    display: flex;
    width: 100%;
    margin-top: 16px;

    div:nth-of-type(1) {
        width: 700px;
        font-size: 15px;
        color: #5d5d5d;
    }
    div:nth-of-type(2) {
        margin-left: 5px;
        font-weight: 700;
        font-size: 15px;
    }
`;

export const subject = css`
    color: #11b69a;
`;

export const teacherInfoContent6 = css`
    display: flex;
    width: 100%;

    div:nth-of-type(1) {
        width: 200px;
        font-size: 16px;
        color: #aaaaaa;
    }
    div:nth-of-type(2) {
        margin-left: 25px;
        font-weight: 700;
        font-size: 15px;
    }
`;

export const teacherInfoLayout6 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 0px 16px 5px 20px;
    width: 100%;
    min-height: 100px;
    min-width: 700px;
    
    /* border: 1px solid black; */
`;

export const modal = css`
    z-index: 999;

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 500px;
    height: 570px;

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: white;

    animation: modaldown 0.3s;
    @keyframes modaldown {
        from {
            opacity: 0;
            transform: translate(-50%, -55%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
`;

export const modalHead = css`

    display: flex;
    justify-content: space-between;

    width: 90%;
    height: 35px;
    color: #808080;
    font-size: 25px;
    font-weight: 700;

    margin-top: 20px;
    & > button{
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    // 다하고 지우기 -----------------------
    /* border: 1px solid black; */
`; 

export const modalContent = css`

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 90%;
    height: 40%;
    color: #808080;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */
    border-radius: 5px;
    
`;

export const modalButton = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;

    width: 430px;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */

    & > button{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
        
        width: 100%;
        height: 35px;
        
        cursor: pointer;
        
        border: none;
        border-radius: 5px;

        font-size: 13px;
        
        color: #11b69a;
        background-color: #d9fcf6;

        :hover {
            background-color: #9decdb;
        }
    }
`;

