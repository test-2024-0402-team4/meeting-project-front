import { css } from "@emotion/react";

export const layout = css`
    margin: auto;
    width: 100%;
    height: 100%;
    flex-direction: column;
    text-decoration: none;
    
`;

export const profileLayout = css`
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
`;
export const imgUrlLayout = css`

    width: 100px;
    height: 100px;
`;


export const profileContentLayout = css`
    box-sizing: border-box;
    width: 700px;
    height: 100px;
    font-size: 16px;
    & > div {
        margin-bottom: 3px;
    }
    & > div:nth-of-type(4) {
        margin-bottom: 0px;
    }

    & > div:nth-of-type(1) {
        font-size: 20px;
    }
`;
