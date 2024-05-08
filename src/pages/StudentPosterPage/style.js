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

    // 다하고 지우기 --------------------------------
    /* border: 1px solid black; */

    & > div:nth-of-type(2) {
        display: block;
        position: absolute;
        font-size: 20px;
        font-weight: 700;
        color: #5d5d5d;
        top: 190px;
    }
    & > div:nth-of-type(3) {
        position: absolute;
        top: 230px;
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

    & > button {
        top: 260px;
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
    width: 150px;
    height: 150px;
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
    background-color: #f0f0f0;
    padding: 3px;
    border-radius: 5px;
    margin-left: 7px;

    color: #5d5d5d;
    font-size: 11px;
`;

export const applyButton = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 55px;
    
    margin-top: 10px;
    padding: 12px 16px;

    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #11b69a;
    background-color: #d9fcf6;

    cursor: pointer;

    :hover {
        background-color: #9decdb;
    }
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
    color: #242424;
    font-size: 16px;
    font-weight: 600;
    & > div {
        margin-left: 17px;
        padding-bottom: 10px;
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
    font-weight: 600;
    margin-bottom: 20px;
    color: #242424;
`;
export const studentPosterInfo = css`

    color: #242424;
    font-size: 16px;
    font-weight: 600;
`;

export const font = css`
    color: #11b69a;
    font-weight: 600;
`;

export const font2 = css`
    color: #5d5d5d;
    font-weight: 600;
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
        font-size: 15px;
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


export const modal = css`
    z-index: 999;

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 300px;
    height: 200px;

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
    /* border: 1px solid #dbdbdb; */
    border-radius: 5px;
    
`;

export const modalButton = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 90%;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */

    & > button{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
        
        width: 90%;
        height: 32px;
        
        cursor: pointer;
        
        border: none;
        border-radius: 5px;

        font-size: 13px;
        
        color: #808080;
        background-color: #f0f0f0;

        :hover {
            background-color: #e1e1e1;
        }
        :active{
            background-color: #f1f1f1;
        }

    }
`;

