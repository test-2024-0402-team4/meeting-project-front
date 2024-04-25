import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
`;

export const body = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
`;

export const bodyBox = css`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 100px;
    border: 1px solid black;
`;


export const inputBox = css`
    & > input {
        width: 500px;
        height: 100px;
    }
`;