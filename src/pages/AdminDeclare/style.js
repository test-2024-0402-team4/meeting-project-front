import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    min-height: 800px;
    height: 100%;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    overflow-y: auto;

`;

export const boardListHeader = css`
box-sizing: border-box;
display: flex;
font-size: 16px;
font-weight: 600;
border-bottom: 2px solid #dbdbdb;
border-top: 1px solid #dbdbdb;
& > div{
    display: flex;
    margin: 0;
    width: 16%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #dbdbdb;
    cursor: default;
}
`;

export const boardListCommentHeader = css`
box-sizing: border-box;
display: flex;
font-size: 14px;
font-weight: 600;
border-bottom: 2px solid #dbdbdb;
border-top: 1px solid #dbdbdb;
& > div{
    display: flex;
    margin: 0;
    width: 15%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #dbdbdb;
    cursor: default;
}
`;

export const boardList = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid #dbdbdb;
& > div{
    display: flex;
    overflow-y: auto;
    height: 70px;
    margin: 0;
    width: 16%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #dbdbdb;
    cursor: default;
}

`;