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
    margin-top: 120px;

    & > span {
        font-size: 50px;
        font-weight: 700
    }
`;

export const headerBox1 = css`
    display: flex;
    align-items: center;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    & > span{
        font-size: 20px;
        color: black;
    }
    * {
        text-decoration-line: none;
        color: #5999FF;
        margin-left: 10px;
    }
`;

// auth 페이지 고정--------------------------------------------------

export const body = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 250px;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
`;

export const inputBox = css`

    width: 250px;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
`;

export const buttonBox = css`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 250px;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    & > button {
        width: 100px;
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


export const checkBox1 = css`

    display: flex;
    justify-content: center;
    align-items: center;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
    margin-bottom: 30px;

    width: 100%;
    height: 40px;
`;


export const checkBox2 = css`

    display: flex;
    justify-content: center;
    align-items: center;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
    font-size: 20px;
    font-weight: 700;

    margin-bottom: 30px;

    width: 250px;
    height: 40px;
`;

export const checkBox3 = css`

    display: flex;
    justify-content: end;

    width: 250px;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    & > button {
        width: 270px;
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