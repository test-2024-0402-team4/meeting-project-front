import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 200px;
  border-top: 1px solid #dbdbdb;
`;

export const line = css`

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100px;
  min-width: 1180px;
  border-bottom: 1px solid #dbdbdb;
`;
export const line2 = css`

  display: flex;
  width: 70%;
  height: 100%;
`;


export const button = css`
  display: flex;
  align-items: center;

  width: 75%;
  height: 100px;

  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */
`;

export const icon = css`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 25%;
  height: 100px;

  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */
`;

export const iconButton = css`

  border: none;
  color: #c9c9c9;
  font-size: 30px;
  margin-right: 10px;

  cursor: pointer;

  background-color: transparent;

`;

export const firstButton = css`

  border: none;
  color: #5d5d5d;
  font-size: 15px;
  margin-left: 10px;

  cursor: pointer;

  :hover{
    text-decoration: underline;
  }

  background-color: transparent;
`;

export const secondButton = css`

  border: none;
  color: #5d5d5d;
  font-size: 15px;
  margin-left: 32px;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
  background-color: transparent;
`;

export const  thirdButton= css`

  border: none;
  color: #5d5d5d;
  font-size: 15px;
  margin-left: 32px;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
  background-color: transparent;
`;

export const forthButton = css`
  border: none;
  color: #5d5d5d;
  font-size: 15px;
  margin-left: 32px;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
  background-color: transparent;
`;

export const Box = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 300px;
  min-width: 1180px;

  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */
`;

export const boxhead = css`

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45%;

  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

`;

export const head1 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-left: 10px;

  width: 34%;
  height: 100%;

    // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

  span:nth-of-type(1){
    font-size: 18px;
    font-weight: 700;
    color: #41B06E;
    padding-right: 30px;
  }
  span:nth-of-type(2){
    margin-left: 110px;
    font-size: 16px;
    color: #333333;
  }
  span:nth-of-type(3){
    margin-left: 110px;
    font-size: 16px;
    color: #999999;
  }
`;

export const boxbody = css`

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45%;

  min-width: 1180px;
    // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

`;

export const body1 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-left: 10px;

  width: 34%;
  height: 100%;
  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

  span:nth-of-type(1){
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    padding-right: 30px;
  }
  span:nth-of-type(2){
    margin-left: 90px;
    font-size: 16px;
    color: #999999;
  }
`;

export const body2 = css`
  display: flex;
  margin-left: 90px;

  span:nth-of-type(1){
    padding-right: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #999999;
  }
  span:nth-of-type(2){
    margin-left: 30px;
    font-size: 16px;
    color: #999999;
  }
`;

export const body3 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-left: 10px;

  width: 34%;
  height: 100%;
  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

  span:nth-of-type(1){
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    padding-right: 30px;
  }
  span:nth-of-type(2){
    margin-left: 40px;
    font-size: 16px;
    color: #999999;
  }
  span:nth-of-type(3){
    margin-left: 40px;
    font-size: 16px;
    color: #999999;
  }
`;

export const body4 = css`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-left: 10px;

  width: 34%;
  height: 100%;
  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */

  span:nth-of-type(1){
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    padding-right: 30px;
  }
  span:nth-of-type(2){
    margin-left: 30px;
    font-size: 16px;
    color: #999999;
  }
  span:nth-of-type(3){
    margin-left: 30px;
    font-size: 16px;
    color: #999999;
  }
  span:nth-of-type(4){
    margin-left: 30px;
    font-size: 16px;
    color: #999999;
  }

`;

export const boxfoot = css`

  display: flex;
  justify-content: end;
  align-items: center;

  width: 100%;
  height: 10%;

  color: #c9c9c9;
  font-size: 13px;
  // 다하고 지우기 ---------------------------------------
  /* border: 1px solid black; */
`;