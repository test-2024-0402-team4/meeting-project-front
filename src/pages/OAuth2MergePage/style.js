import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;

    // 다하고 없애기 --------------------------------
    /* border: 1px solid black; */

`;
export const header = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    width: 100%;
    height: 150px;
    margin-top: 100px;

    & > span {
        font-size: 50px;
        font-weight: 700
    }
`;

export const headerBox1 = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    & > span{
        font-size: 18px;
        color: black;
    }
    * {
        text-decoration-line: none;
        color: #5999FF;
        margin-left: 5px;
        font-size: medium;
    }
`;

export const body = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다하고 없애기 ---------------------------------------------------
    /* border: 1px solid black; */

    width: 100%;
    height: 250px;

`;

export const bodyBox1 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 10px;

    width: 375px;
    height: 100%;
    
    // 다하고 없애기 ---------------------------------------------------
    /* border: 1px solid black; */

    * > button {
        border: none;
        border-radius: 5px;
        background-color: #d9fcf6;
        font-size: 15px;
        width: 250px;
        height: 40px;
        color: #11b69a;

        &:hover {
            background-color: #9decdb;
        }
        cursor: pointer;
    }
`;