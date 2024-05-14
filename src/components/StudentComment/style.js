import { css } from "@emotion/react";

export const commentLayout = css`
    margin: 0 auto;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    align-items: end;
    min-height: 120px;
    width: 100%;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;

    // 다하고 지우기 ------------------------------
    /* border: 1px solid black; */
`;

export const inputComment = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 1;
    padding: 13px;
    width: 100%;
    height: 100%;

    outline: none;
    border: none;
    background-color: white;
    resize: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const inputButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d9fcf6;
    
    width: 50px;
    height: 30px;
    margin-right: 8px;
    margin-bottom: 10px;
    
    color: #11b69a;
    transition: background-color 0.3s ease;
    
    border-radius: 5px;
    border: none;

    cursor: pointer;
    
    &:hover {
        background-color: #9decdb;
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

    display: flex;
    justify-content: end;

    margin-right: 20px;
    margin-bottom: 20px;

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

    // 다하고 지우기 --------------------------------------
    /* border: 1px solid black; */
`;

export const commentItems = css`
    list-style-type: none;
    
    & > pre {
        box-sizing: border-box;
        border-bottom: 1px solid red;
        height: 50px;
        white-space: pre-wrap;
    }

    div:nth-of-type(1){
        /* border-top: 1px solid #dbdbdb; */
    }


    // 다하고 지우기 --------------------------------------
    /* border: 1px solid black; */
`;

export const commentTitle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50px;
    padding: 5px 0px;
    margin-top: 10px;

    // 다하고 지우기 --------------------------------------
    /* border: 1px solid black; */
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 50px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
    // 다하고 지우기 --------------------------------------
    /* border: 1px solid black; */
`;

export const commentDiv = css`
    display: flex;
    justify-content: center;

`;
export const commentMain = css`
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding-left: 53px;
    min-height: 55.5px;
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    
    & > pre{
        margin-top: 0px;
        margin-bottom: 10px;
        white-space: pre-wrap;
    }
    & > div{
        margin-left: 5px;
        height: 20px;
        margin-right: 2px;
    }

`;

export const commentOption = css`
    display: flex;
    height: 70px;
    justify-content: space-between;
`;
export const commentNick = css`
margin-left: 10px;
margin-top: 12px;
font-size: 13px;
font-weight: 500;
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
