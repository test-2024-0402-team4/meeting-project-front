import { css } from "@emotion/react";

export const layout = css`
    display: flex;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */
`;

export const pageNumbers = css`
    display: flex;
    margin: 5px;

    // 다하고 지우기 -----------------------------
    /* border: 1px solid black; */
    
`

export const pageButton = (isSelected) => css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;

    margin-right:3px ;
    padding: 2px 5px;

    min-width: 25px;
    height: 25px;

    font-size: 20px;

    /* background-color: ${isSelected ? "#75e9af" : "white"}; */
    text-decoration: none;
    color: #808080;

    &:hover {
        /* background-color: ${isSelected ? "#75e9af" : "#eeeeee"}; */
        text-decoration: ${isSelected ? "underline" : "none"};
    }

`;


export const pageCount = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 10px;
    height: 25px;
    background-color: white;
    color: black;
    cursor: default;
    
`;

export const page = css`
    margin-right: 10px;
    font-size: 14px;
`;

export const count = css`
    font-size: 14px;

`;

export const sideBox1 = css`
    display: flex;
    
`;
export const sideBox2 = css`
    display: flex;
`;