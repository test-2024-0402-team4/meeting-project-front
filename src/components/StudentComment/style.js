import { css } from "@emotion/react";

export const commentLayout = css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-right: 180px;
    margin-top: 15px;
    width: 100%;
`;

export const inputContainer = css`
    border-radius: 3px;
    width: 99.5%;
    border: 1px solid #9be7a9;
    margin-bottom: 5px;
    border-radius: 5px;
    margin-left: 20px;
`;

export const inputComment = css`
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 1;
    padding: 13px;
    width: 900px;
    height: 140px;
    outline: none;
    border: none;
    background-color: white;
    resize: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const inputButton = css`
    margin-bottom: 12px;
    margin-left: 1030px;
    width: 50px;
    height: 30px;
    background-color: #14dbba;
    border: none;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: #11b69a;
    }
`;

export const beforeChangeButton = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: none;
    background-color: white;
    border-radius: 5px;
    margin-top: 2px;
    height: 24px;
    &:hover {
        background-color: #edebeb;
    }
    &:active {
        background-color: #d5dada; 
    }
`;

export const afterChangeButton = css`
    margin-bottom: 12px;
    &:nth-of-type(1){
        margin-left: 973px;
    }
`;

export const afterChangeButtons = css`
    width: 50px;
    height: 30px;
    margin-right: 7px;
    background-color: #14dbba;
    border: none;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: #11b69a;
    }
`;

export const commentItems = css`
    list-style-type: none;
    & > pre {
        box-sizing: border-box;
        border-bottom: 1px solid red;
        height: 50px;
        white-space: pre-wrap;
    }
    margin-left: 23px;
    width: 99.5%;
`;

export const commentTitle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50px;
    padding: 10px 0px;
    margin-top: 20px;
`;

export const commentMain = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 10px;
`;

export const commentOption = css`
    display: flex;
    justify-content: space-between;
    height: 70px;
`;

export const commentOptionButton = css`
    margin-right: 5px;
    width: 43px;
    height: 24px;
    background-color: white;
    border: none;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: #e9eded;
    }
    &:active {
        background-color: #c3c9c8; 
    }
`;

export const optionButtonBox = css`
    position: relative;
    margin-left: 123px;
`;

export const commentItem = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    top: 25px;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 58px;
    & > button {
        width: 100%;
        height: 33px;
    }
`;

export const commentDate = css`
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
    margin-right: 7px;
`;

export const headerRight = css`
    width: 150px;
`;
