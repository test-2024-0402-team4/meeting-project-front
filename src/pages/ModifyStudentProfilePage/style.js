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

export const leaveBox = css`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-top: 30px;

    width: 700px;
    height: 100px;
    
    border-top: 3px solid #f1f1f1;
`;

export const leave = css`
    display: flex;
    flex-direction: column;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

    margin: 0px 20px;
`;

export const leaveSpan = css`

    font-size: 14px;
    font-weight: 700;
    color: #808080;

`;

export const leaveButton = css`
    button {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
        
        width: 100px;
        height: 32px;
        
        cursor: pointer;
        
        border: none;
        border-radius: 5px;

        font-size: 13px;
        
        color: #808080;
        background-color: #f0f0f0;

        :hover {
            background-color: #e1e1e1;
        }
        :active{
            background-color: #f1f1f1;
        }

    }  
`;

export const spanBox = css`
    span:nth-of-type(1){
        font-size: 16px;
        font-weight: 500;
        color: #242424;
    }
    span:nth-of-type(2){
        font-size: 13px;
        padding: 0px 0px 0px 4px;
        color: #ff3a1e;
    }
`;

export const selectBox = css`
    margin-top: 10px;

    & > input {
        padding-left: 10px;
        width: 646px;
        height: 46px;
        font-size: 16px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;

        color: #c9c9c9;
        background-color: #f8f8f8;
    }
`;

export const genderBox = css`
    display: flex;
    
    width: 660px;
    height: 50px;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const gender = css`
    display: flex;
    align-items: center;

    width: 200px;

    & > input {
       width : 20px;
       height: 20px;

    }
    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
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


export const modal = css`
    z-index: 999;

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 300px;
    height: 200px;

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: white;

    animation: modaldown 0.3s;
    @keyframes modaldown {
        from {
            opacity: 0;
            transform: translate(-50%, -55%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
`;

export const modalHead = css`

    display: flex;
    justify-content: space-between;

    width: 90%;
    height: 35px;
    color: #808080;
    font-size: 25px;

    & > button{
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    // 다하고 지우기 -----------------------
    /* border: 1px solid black; */
`; 

export const modalContent = css`

    display: flex;
    align-items: center;

    width: 90%;
    height: 40%;
    color: #808080;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid #dbdbdb; */
    border-radius: 5px;
    
`;

export const modalButton = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 90%;

    // 다하고 지우기 ----------------------------
    /* border: 1px solid black; */

    & > button{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
        
        width: 90%;
        height: 32px;
        
        cursor: pointer;
        
        border: none;
        border-radius: 5px;

        font-size: 13px;
        
        color: #808080;
        background-color: #f0f0f0;

        :hover {
            background-color: #e1e1e1;
        }
        :active{
            background-color: #f1f1f1;
        }

    }
`;