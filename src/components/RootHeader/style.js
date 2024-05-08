import { css } from "@emotion/react";

export const headerLayout = css`
    height: 127px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    
`;
export const header = css`
    padding: 10px 0px 10px 0px;
    display: flex;
    width: 70%;
    min-width: 550px;
    margin: 0 auto;
`;

export const headerAcoountLayout = css`
    margin-top: 10px;
    height: 20px;
    min-width: 100px;
    & > span {
        color: rgb(170 170 170);
        font-size: 14px;
        cursor: pointer;
            &:hover {
                color: black;
            }

    }
    & span:nth-of-type(2) {
        margin-left: 20px;            
    }
    
    & span:nth-of-type(3) {
        margin-left: 20px;
    }
    /* border: 1px solid black; */
`;

export const headerInfoLayout = css`
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

export const roleName = css`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(128, 128, 128);
    pointer-events: none;

`;

export const headerItemLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100px;
    justify-content: space-between;
`;

export const logoLayout = css`
    margin-right: 20px;
    margin-top: 30px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img {
        height: 100%;
        cursor: pointer;
    }
`;

export const headerItem = css`
    display: flex;
    max-width: 1024px;
    padding-bottom: 10px;
    

    & > span {
        color: #aaaaaa;
        font-size:  16px;
        cursor: pointer;
        &:hover {
            font-weight: 700;
            color: #9e9e9e;
        }
    }

    & span:nth-of-type(2) {
        margin-left: 20px;            
    }
    
    & span:nth-of-type(3) {
        margin-left: 20px;
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