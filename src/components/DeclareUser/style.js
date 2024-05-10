import { css } from "@emotion/react";


export const modal = css`
    z-index: 999;

    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 500px;
    height: 420px;

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
export const mainInput = css`
    margin-top: 10px;
    width: 80%;
    height: 40px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    font-size: 15px;
`;

export const writeContent = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const declareButtonLayout = css`
    width: 80%;
    display: flex;
    justify-content: flex-end;
`

export const declareButton = css`
    box-sizing: border-box;
    display: flex;

    & > button:first-of-type {
        margin-right: 10px; 
    }

    & > button{
        display: flex;
        align-items: center;
        justify-content: center;
        
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


export const contentInput = css`
    border-radius: 4px;
    width: 80%;
    height: 200px;
    outline: none;
    border: 1px solid #dbdbdb;
    resize: none;
    padding-top: 20px;
    font-size: 15px;
    font-style: normal;

`;

export const modalHead = css`
    display: flex;
    justify-content: space-between;

    width: 80%;
    height: 35px;
    color: #808080;
    font-size: 25px;
    font-weight: 700;
    margin-top: 15px;
    & > button{
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        & > div:nth-of-type(1) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
            font-size: 30px;
            margin-top: 5px;
        }
    }

`; 
