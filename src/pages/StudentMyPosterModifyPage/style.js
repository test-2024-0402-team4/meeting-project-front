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

export const studentBox = css`
    display: flex;
    flex-direction: column;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

    margin: 0px 20px;
`;

export const genderBox = css`
    margin-top: 10px;

`;

export const genderBox2 = css`
    border: 1px solid black;

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
    span:nth-child(1){
        font-size: 16px;
        font-weight: 500;
        color: #242424;
    }
    span:nth-child(2){
        font-size: 13px;
        padding: 0px 0px 0px 4px;
        color: #ff3a1e;
    }
`;

export const selectBox = css`
    margin-top: 10px;

`;


export const inputBox = css`
    input{
        width: 650px;
        height: 50px;
        margin-top: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        ::placeholder{
            color: #dbdbdb;
            padding-left: 7px;
            font-size: 15px;
        }
    }
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

export const inputBox2 = css`
    textarea{
        width: 650px;
        height: 120px;
        margin-top: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        font-size: 15px;
        

        ::placeholder{
            display: flex;
            justify-content: center;
            padding-top: 10px;
            padding-left: 7px;
            color: #dbdbdb;
            font-size: 15px;
        }
    }
`;
export const bodyBox2 = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 150px;

        // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const bodyBox3 = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 700px;
    height: 200px;

        // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const text = css`
    display: flex;
    justify-content: end;
    margin-top: 5px;
    font-size: 13px;
    color: #aaaaaa;
`;