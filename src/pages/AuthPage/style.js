import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #b4b2b2;
`;

export const layout = css`
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;

    background-color: #b4b2b2;

    width: 500px;
    height: 100%;
`;