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
    height: 440px;

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
    margin-top: 20px;
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

export const declareButton = css`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80%;
    & > button {
        
    }
`

export const contentInput = css`
    border-radius: 4px;
    width: 80%;
    height: 200px;
    outline: none;
    border: 1px solid #dbdbdb;
    resize: none;
    padding-top: 20px;
    font-size: 15px;
    font-family: monospace;
    font-style: normal;

`;

export const modalHead = css`

    display: flex;
    justify-content: space-between;

    width: 90%;
    height: 35px;
    color: #808080;
    font-size: 25px;
    font-weight: 700;

    margin-top: 20px;
    & > button{
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

`; 
