import { css } from "@emotion/react";

export const commentLayout = css`
margin-top: 15px;
width: 900px;
`;

export const inputContainer = css`

width: 900px;
border: 1px solid #9be7a9;
`;

export const inputComment = css`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
flex-direction: column;
flex-grow: 1;
padding: 10px;
width: 900px;
height: 140px;
outline: none;
border: none;
background-color: white;
resize: none;
&::-webkit-scrollbar {
    display: none;
}
`;
export const inputButton = css`
margin-bottom: 12px;
margin-left: 830px;
width: 50px;
height: 30px;
`;
export const afterChangeButton = css`
margin-bottom: 12px;
&:nth-of-type(1){
    margin-left: 782px;
}

`;
export const afterChangeButtons = css`
width: 50px;
height: 30px;
margin-right: 7px;
`;

export const commentItems = css`
list-style-type: none;
height: 100%;
& > pre {
    box-sizing: border-box;
    border-bottom: 1px solid red;
    height: 50px;
    white-space: pre-wrap;
    
}
`;


export const commentTitle = css`
display: flex;
flex-direction: column;
width: 100%;
height: 80px;
border-bottom: 1px solid #dbdbdb;
padding: 10px 0px;
margin-top: 30px;

`;

export const commentMain = css`
box-sizing: border-box;
border-bottom: 1px solid #dbdbdb;

`

export const commentOption = css`
display: flex;
justify-content: space-between;
height: 70px;
`;
export const commentOptionButton = css`
margin-right: 10px;
width: 43px;
height: 24px;
`;

export const optionButtonBox = css`
    position: relative;
   
  
`
export const commentItem = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 5px;
    width: 70px;
    background-color: #fafafa;

    & > button {
        
        width: 100%;
        height: 30px;
    }
`;