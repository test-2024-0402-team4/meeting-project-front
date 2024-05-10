import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
`;

export const header = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    width: 100%;
    height: 120px;

    & > span {
        font-size: 56px;
        font-weight: 700
    }
`;

export const headerBox1 = css`
    display: flex;
    align-items: center;

    & > span{
        font-size: 18px;
        color: black;
    }
    * {
        text-decoration-line: none;
        color: #5999FF;
        font-size: medium;
        padding-left: 5px;
    }
`;

// ------------------------------------------------------------------------

export const body = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;


    // 다하고 없애기 --------------------------------
    /* border: 1px solid black; */

    width: 100%;
    height: 550px;
`;


export const inputBox = css`
    width: 250px;


    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

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

export const inputBox2 = css`
    width: 250px;


    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
    * > input {
        color: #a5a5a5;
    }

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

export const email = css`
    display: flex;

    /* border: 1px solid black; */
    button{
        cursor: pointer;
        background-color: #f0f0f0;
        color: #5d5d5d;
        margin-left: 5px;
        width: 50px;
        height: 50px;
        :hover{
            background-color: #dbdbdb;
        }
        :active{
            background-color: #c9c9c9;
        }
    }
`;

export const buttonBox1 = css`

    display: flex;
    justify-content: space-between;
    
    margin-top: 10px;

    width: 250px;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */


`;
// 학생 데이터 버튼
export const buttonBox2 = css`

    display: flex;
    justify-content: space-between;

    margin-top: 156px;

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

// 선생님 데이터 버튼
export const buttonBox3 = css`

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 90px;

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

// 공용 라디오 박스
export const radioBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

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
        border-radius: 5px;
        cursor: pointer;
    }

    input:checked + label {
        border: 1px solid #6efa6e;
    }
`;

// 잠긴 라디오 박스
export const radioBox2 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

    input{
        display: none;
    }

    label {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        color: #dbdbdb;

        border: 1px solid #dbdbdb;
        border-radius: 5px;
        cursor: pointer;
    }

    input:checked + label {
        border: 1px solid #6efa6e;
    }
`;

export const bodyBox1 = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;

    height: 500px;

    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */

`;

export const bodyBox2 = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    height: 500px;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
`;

export const bodyBox3 = css`

    display: flex;
    flex-direction: column;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
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
    flex-direction: column;
    // 다 하고 없애기 --------------------------------
    /* border: 1px solid black; */
    border-radius: 5px;

    margin-top: 10px;
`;

export const foot = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 100px;
    // 다 하고 없애기 --------------------------------
    border: 1px solid black;
`;