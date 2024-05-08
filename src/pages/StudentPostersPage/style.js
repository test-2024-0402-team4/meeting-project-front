import { css } from "@emotion/react";

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    font-size: 12px;
    display: flex;
    overflow: hidden;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */

    min-width: 1200px;
`;

export const studentPosterRootLayout = css`
    width: 200px;
    height: 100%; 

    /* border: 1px solid black; */
`;

export const filterLayout = css`
    box-sizing: border-box;
    position: fixed;
    flex-direction: column;

    margin-right: 10px;

    padding: 10px;

    width: 180px;
    height: 100%;
    z-index: 0;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;


export const filterContentLayout = css`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin-top: 25px;
    
    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
`;

export const filterBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100;
    height: 35px;
    margin-top: 10px;
    padding: 8px;
    
    color: #5d5d5d;
    background-color: rgb(248 248 248);
    
    font-size: 14px;
    border-radius: 5px;

    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */

    cursor: pointer;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const filiterModal = (filterNum) => css`
    display: flex;
    align-items: center;
    position: absolute;
    background-color: rgb(248 248 248);

    top: ${filterNum === 1 ? '35px' :
          filterNum === 2 ? '80px' :
          filterNum === 3 ? '125px' :
          filterNum === 4 ? '170px' :
          filterNum === 5 ? '215px' : '110px'};
    left: 180px;
    
    border: 1px solid #5d5d5d;
    border-radius: 5px;
    width:250px;
`;

export const xMark = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    //다하고 지우기 ---------------------------------------
    /* border: 1px solid black; */
    margin-left: 10px;

    cursor: pointer;
    & > * {
        color: #aaaaaa;
        font-size: 18px;
        :hover{
            color: #5d5d5d;
        }
    }
`

export const studentPosters = css`
    box-sizing: border-box;
    width: 300px;
    height: 100%;
    padding: 10px;
    margin-top: 20px;
    margin-right: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.20);

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    cursor: pointer;
`;
export const studentPosterContainer = css`
`;
export const studentPoster = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 122px;
`;


export const imgLayout = css`
    box-sizing: border-box;
    width: 100px;
    height: 100px;

    // 다하고 지우기 -----------------------------------
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    & > img {
        border-radius: 8px;
        height: 100%;
    }
`;
export const studentPosterContent = css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    margin-left: 16px;

    cursor: pointer;

    // 다하고 지우기 -----------------------------------
    /* border: 1px solid black; */

    div:nth-of-type(1) {
        font-size: 16px;
        color: #444444;
        font-weight: 700;
    }
    div:nth-of-type(2) {
        margin-top: 5px;
        font-size: 15px;
        color: #444444;
    }
    div:nth-of-type(3) {
        margin-top: 5px;
        font-size: 14px;
        color: #444444;
    }
    div:nth-of-type(4) {
        margin-top: 5px;
        font-size: 14px;
        color: #444444;
    }

`;

export const subjects =css`

& > span {
    font-size: 14px;
    margin-right: 10px;
}

`;
export const studnetinfo =css`
    & > span {
        font-size: 12px;
        color: #5d5d5d;
        padding: 2px;
        width: 100%;
        background-color: #f0f0f0;
        border-radius: 4px;
        margin-right: 10px;
    }
`;

export const studentPosterLayout = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    
    width: 100%;
    height: 100%;

    min-width: 710px;
    // 다하고 지우기 -----------------------------------
    /* border: 1px solid black; */
`;

export const posterTitle = css`

    width: 100%;
    height: 30px;

    margin-left: 20px;
    color: #5d5d5d;
    font-size: 20px;
    font-weight: 700;

    // 다하고 지우기 -----------------------------------
    /* border: 1px solid black; */
`;

export const posterBox = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    margin-left: 20px;
    margin-bottom: 20px;
    
    width: 100%;
    height: 100%;

    min-width: 710px;
    // 다하고 지우기 -----------------------------------
    /* border: 1px solid black; */

`;