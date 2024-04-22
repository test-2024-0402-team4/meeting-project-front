import { css } from "@emotion/react";

export const testLayout = css`
margin-left: 700px;
margin-top: 120px;

`

export const imgBox = css`
overflow: hidden;
width:250px;
height: 250px;
border: 1px solid black;

& > img {
    width: 100%
}
`