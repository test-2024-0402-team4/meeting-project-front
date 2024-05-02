import { css } from "@emotion/react";

export const testLayout = css`
margin-left: 700px;
margin-top: 120px;

`

export const imgBox = css`
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
`