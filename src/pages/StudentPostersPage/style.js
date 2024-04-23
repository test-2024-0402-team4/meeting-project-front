import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    font-size: 12px;
    display: flex;
    overflow: hidden;

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
    border: 1px solid #dbdbdb;
    border-radius: 8px;
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
    border-radius: 8px;

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

export const subjects =css`

& > span {
    font-size: 14px;
    margin-right: 10px;
}

`;
export const studnetinfo =css`

& > span {
    font-size: 12px;
    color: #5d5d5d5;
    padding: 2px;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-right: 10px;
}

`;