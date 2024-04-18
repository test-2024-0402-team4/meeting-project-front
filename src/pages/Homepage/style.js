import { css } from "@emotion/react";

export const layout = css`
    margin: 0 auto;
    width: 70%;
    min-height: 700px;
    display: flex;
    justify-content: space-between;
`

export const mainLeftItem = css`
    position: relative;
    width: 40%;
`
export const dataInputBox = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    left: 10px;
    top: 20px;
    width: 100%;
    height: 150px;

`;
export const dataInputItem = css`
    box-sizing: border-box;
    position: absolute;
    left: 10px;
    top: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(248 248 248);

`;

export const mainRightItem = css`
    margin-left: 20px;
    width: 60%;
`
