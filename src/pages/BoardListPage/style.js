import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    height: 100%;

    width: 80%;
    max-width: 1100px;


    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const head = css`
    text-align: center;
    font-size: 38px;
    align-items: center;
    margin-bottom: 8px;

    span{
        color: #333333;
        font-weight: 700;
    }
`;

export const authority = css`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 700;

    width: 100%;
    height: 50px;

    div{
        height: 30px;
        border: 1px solid #dbdbdb;
        margin-left: 10px;
        margin-right: 10px;
    }

`;


export const authorityButton = css`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    font-size: 20px;
    font-weight: 700;
    color: #b8b8b8;

    background-color: transparent;

    transition: background-color 0.3s ease;

    cursor: pointer;

    :hover{
        color: #808080;
    }

    border: none;
    
`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    
    // min-height: 720px;
    max-height: 1500px;
    max-width: 1100px;

`;

export const headerTitle = css`
    text-align: center;
    font-size: 35px;
    align-items: center;
    color: #333333;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const searchInput = css`
    display: flex;
    justify-content: end;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid #dbdbdb; */
`;
export const searchContainer = css`
    display: flex;
    justify-content: center;

    width: 200px;
    height: 26px;
    margin-bottom: 10px;
    
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    // 다하고 지우기 ------------------------
    /* border: 1px solid black; */
`;
export const inputBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: none;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;
export const searchButton = css`

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: transparent;
    border: none;

    cursor: pointer;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const boardListHeader = css`
    display: flex;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */

    
`;
export const boardListItem = css`

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #5d5d5d;
    text-decoration: none;

    cursor: pointer;
    margin-bottom: 10px;

    /* border-bottom: 1px solid #dbdbdb; */

    :hover{
        background-color: #e1f5fd;
    }
`;

export const boardTitle = css`
    display: flex;
    align-items: center;

    padding: 0px 10px;

    min-height: 75px;

    font-size: 18px;

    border: 1px solid #dbdbdb;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;
export const genderImg = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;

    img {
        width: 40px;
        height: 40px;
    }
        
    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const listBottom1 = css`
    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 1px solid black; */
`;

export const a = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const f = css`
    display: flex;
    width: 100%;

    /* border: 1px solid black; */
`;
export const nickLayout = css`
width: 100%;
display: flex;
justify-content: flex-start;
padding-left: 10px;
`;
export const nick = css`
    
    margin-top: 17px;
    padding-right: 9px;
    border-right: 1px solid #dbdbdb;
    height: 22px;
    font-size: 15px;
    color: #808080;


`

export const d = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const lc = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 57px;
    border: 1px solid #dbdbdb;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

`;
export const date = css`
    
    font-size: 15px;
    margin-left: 9px;
    margin-top: 17px;

    height: 100%;

    color: #808080;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;
export const Count = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;

    color: #808080;

`
export const commentCount = css`
    display: flex;
    align-items: center;
    padding-top: 5px;
    width: 50px;
    
    font-size: 16px;

`;
export const commentIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다하고 지우기 -------------------------------
    /* border: 1px solid black; */
`;

export const viewCount = css`
    display: flex;
    
    padding-top: 5px;
    align-items: center;
    width: 60px;
    font-size: 16px;

`;
export const view = css`
`;

export const c = css`
    display: flex;

`;

export const pageNumber = css`
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: auto;

`;

export const writeButtonLayout =css`
    display: flex;
    justify-content: end;
    padding: 10px;
    align-items: center;

    text-decoration: none;
    margin-left: 25px;

`;
export const writeButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 40px;

    background-color: #d9fcf6;
    border: none;
    color: #11b69a;

    font-size: 15px;
    font-weight: 700;
    border-radius: 5px;

    transition: background-color 0.3s ease;
    
    /* border: 1px solid black; */

    cursor: pointer;

    &:hover {
            background-color: #9decdb;
        }
`;

export const submit = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    margin-left: 8px;

    border-radius: 5px;
`;

export const e = css`
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    margin-left: 25px;

    width: 100%;
    // 다하고 지우기 ------------------------
    /* border: 1px solid black; */
`;