import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    flex-direction: column;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #b4b2b2;
`;

export const inputBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;

    width: 300px;
    height: 200px;
`;

export const layout = css`
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
`;