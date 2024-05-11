import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    font-size: 12px;
    display: flex;

`;


export const profileLayout = css`
    position: relative;
    box-sizing: border-box;
    padding: 28px 20px 0px 30px;
    width: 255px;
    height: 350px;
    min-width: 255px;
    border: 1px solid #dbdbdb;
    margin-top: 20px;
    border-radius: 4px;


`;
export const email = css`
margin-top: 10px;
`;

export const gender = css`
margin-left: 30px;
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


export const registerButtonLayout = css`
    position: absolute;
    display: flex;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55px;
    background-color: #d9fcf6;
    border-radius: 5px;
    margin-top: 10px;
`

export const registerButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 55px;
    
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

export const studentPosterRootLayout = css`
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


export const filterContentLayout = css`
    margin-top: 10px;
    width: 100%;
    height: 100%;
    max-width: 1000px;
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

export const studentPosterLayout = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

export const studentPosters = css`
    box-sizing: border-box;
    width: 300px;
    height: 100%;
    padding: 10px;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    cursor: pointer;

`;
export const studentPosterContainer = css`
`;
export const studentPoster = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 122px;
`;


export const imgLayout = css`
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    & > img {
        border-radius: 8px;
        height: 100%;
    }
`;
export const studentPosterContent = css`
    box-sizing: border-box;
    margin-left: 16px;
    cursor: pointer;

    div:nth-of-type(1) {
        font-size: 16px;
        color: #242424;
        font-weight: 700;
    }
    div:nth-of-type(2) {
        margin-top: 5px;
        font-size: 13px;
        color: #5d5d5d;
    }
    div:nth-of-type(3) {
        margin-top: 5px;
        font-size: 13px;
        color: #5d5d5d;
    }
    div:nth-of-type(4) {
        margin-top: 5px;
        font-size: 13px;
        color: #5d5d5d;
    }

`;

export const subjects =css`

& > span {
    font-size: 14px;
    margin-right: 10px;
}

`;
export const studnetinfo =css`
    margin-top: 10px;
    & > span {
        font-size: 12px;
        color: #5D5D5D;
        padding: 3px;
        width: 100%;
        background-color: #f0f0f0;
        border-radius: 5px;
        margin-right: 10px;
    }
`;

export const buttonLayout = css`
    margin-top: 13px;


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