import { css } from "@emotion/react";

export const bodyBox = css`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 100px;
    
        // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const box2 = css`
    display: flex;
    flex-direction: column;

        // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

    margin: 0px 20px;
`;

export const spanBox = css`
    span:nth-of-type(1){
        font-size: 16px;
        font-weight: 500;
        color: #242424;
    }
    span:nth-of-type(2){
        font-size: 13px;
        padding: 0px 0px 0px 4px;
        color: #ff3a1e;
    }
`;

export const selectBox = css`
    margin-top: 10px;
    display: flex;
    & > input {
        padding-left: 10px;
        width: 646px;
        height: 46px;
        font-size: 16px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;

        color: #c9c9c9;
        background-color: #f8f8f8;
    }
    & > button {
        margin-left: 20px;
        width: 110px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 5px;
        border: none;
        background-color: #d9fcf6;
        color: #11b69a;
        cursor: pointer;

        &:hover{
            background-color: #9decdb;
        }

    }
`;
export const circleCheck = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
    font-size: 26px;
    color: #11b69a;
`;


