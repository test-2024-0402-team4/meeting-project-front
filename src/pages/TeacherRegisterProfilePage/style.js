import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
`;

export const box = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    border: 1px solid #dbdbdb;
`;

export const selectBox1 = css`

    
    border: 1px solid #dbdbdb;

`;

export const selectBox2 = css`
    border: 1px solid #dbdbdb;
`;

export const selectBox3 = css`
    border: 1px solid #dbdbdb;
`;

export const selectBox4 = css`
    border: 1px solid #dbdbdb;
`;

export const buttonBox = css`
    width: 50%;
    // 다 하고 없애기 --------------------------------
    border: 1px solid black;

    * > button {
        width: 250px;
        height: 40px;
        font-size: 15px;

        border: none;
        border-radius: 5px;

        background-color: #d9fcf6;
        color: #11b69a;

        &:hover{
            background-color: #9decdb;
        }
    }
`;