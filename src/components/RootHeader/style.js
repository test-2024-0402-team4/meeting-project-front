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
    max-width: 1150px;
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
    width: 120px;
    height: 100px;
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
        color: rgb(170 170 170);
        font-size:  18px;
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
`;


