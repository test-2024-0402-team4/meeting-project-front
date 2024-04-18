import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #b4b2b2;
`;

export const layout = css`
    position: relative;
    box-sizing: border-box;
    
`;

export const buttonBox1 = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > button {
        width: 100%;
    }
`;
export const buttonBox2 = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const buttonBox3 = css`
    display: flex;
`;

export const oauth2box = css`
    position: relative;
    box-sizing: border-box;
    
    width: 237px;
`;

export const oauth2Site = css`
    display: flex;
    flex-direction: column;
    padding: 0px;
    list-style-type: none;
`;