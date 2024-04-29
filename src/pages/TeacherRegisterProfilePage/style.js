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

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const bodyBox = css`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 100px;
    
        // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const bodyBox1 = css`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 100px;
    margin-bottom: 10px;
    
    border-bottom: 1px solid #dbdbdb;
`;


export const box1 = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px 20px 0px 20px;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

    & > span{
        font-size: 20px;
        font-weight: 500;
    }
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

`;


export const buttonBox = css`
    width: 100px;
    height: 40px;
    font-size: 15px;

    border: none;
    border-radius: 5px;

    background-color: #d9fcf6;
    color: #11b69a;
    cursor: pointer;

    &:hover{
        background-color: #9decdb;
    }
`;


