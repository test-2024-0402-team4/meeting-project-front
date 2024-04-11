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

export const logo = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px 5px;

    width: 500px;
    height: 50px;

    border: 1px solid black;
`;

export const signupLayout = css`
    box-sizing: border-box;
    flex-direction: column;

    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    
    border: 1px solid black;

    width: 500px;
    height: 900px;
`;

export const signupBox = css`
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    align-items: center;

    width: 460px;
    height: 100%;

    border: 1px solid black;
`


export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;

    input{
        display: none;
    }

    label {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        border: 1px solid #dbdbdb;
        cursor: pointer;
    }

    input:checked + label {
        border: 1px solid #6efa6e;
    }
`;


export const signupButton = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 15px 0px;

    width: 460px;
    height: 50px;

    background-color: transparent;

    font-size: 16px;

    cursor: pointer;

    &:hover {
        background-color: #dbdbdb;
    }
    &:active {
        background-color: #b8b5b5;
    }
`;

export const selectBox = css`
    
    display: flex;
    justify-content: space-around;

    margin-top: 10px;
    width: 100%;
`;

export const foot = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 100px;

    border: 1px solid black;
`;