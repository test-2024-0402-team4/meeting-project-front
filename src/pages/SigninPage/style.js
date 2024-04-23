import { css } from "@emotion/react";

export const background = css`

`;

export const layout = css`
    margin: 0px auto;
    width: 70%;
    height: 100%;
    
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


export const body = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 다하고 없애기
    /* border: 1px solid black; */

    width: 100%;
    height: 250px;

`;


export const bodyBox1 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 100%;
    
    // 다하고 없애기
    /* border: 1px solid black; */

    * > button {
        border: none;
        border-radius: 5px;
        background-color: #d9fcf6;
        font-size: 18px;
        width: 250px;
        color: #11b69a;

        &:hover {
            background-color: #9decdb;
        }

        cursor: pointer;
    }

`;

export const linkBox = css`

    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    * {
        text-decoration-line: none;
        color: rgb(170 170 170);
    }

    *:hover {
        color: black;
    }
`;

// ----------------------------------------------------
export const bodyLine = css`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`;

export const line1 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40%;
    border: 1px solid #f1f1f1;
`;

export const line2 = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
`;

export const line3 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40%;
    border: 1px solid #f1f1f1;
`;
// ----------------------------------------------------


export const bodyBox2 = css`
    display: flex;
    justify-content: center;

    // 다하고 없애기
    /* border: 1px solid black; */

    width: 375px;
    height: 100%;
`;

// ----------------------------------------------------

export const naver = css`

    display: flex;

    width: 270px;
    border: 1px solid #dbdbdb;
    margin: 10px 0px 10px 0px;
`;

export const naverImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #4fdd4f;

    width: 40px;
    height: 40px;
`;
export const naverBox1 = css`
    width: 20%;
`;

export const naverBox2 = css`
    width: 100%;

    & > a {
        & > button {
            width: 100%;
            height: 100%;

            border: none;
            border-left: 1px solid #4fdd4f;
            
            background-color: #4fdd4f;
            color: white;

            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;

// ----------------------------------------------------

export const kakao = css`

    display: flex;

    width: 270px;
    border: 1px solid #dbdbdb;
    margin: 35px 0px 0px 0px;
`;

export const kakaoImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: black;

    width: 40px;
    height: 40px;
    font-size: 25px;
`;
export const kakaoBox1 = css`
    width: 20%;
`;

export const kakaoBox2 = css`
    width: 100%;

    & > a {
        & > button {
            width: 100%;
            height: 100%;

            border: none;
            border-left: 1px solid yellow;
            
            background-color: yellow;
            color: black;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;

// ----------------------------------------------------


export const google = css`
    display: flex;

    width: 270px;
    border: 1px solid #dbdbdb;
    margin: 10px 0px 0px 0px;
`;

export const googleImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    font-size: 20px;
`;
export const googleBox1 = css`
    width: 20%;
`;

export const googleBox2 = css`
    width: 100%;

    & > a {
        & > button {
            width: 100%;
            height: 100%;

            border: none;
            border-left: 1px solid #1a73e8;
            
            background-color: #1a73e8;
            color: white;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;
