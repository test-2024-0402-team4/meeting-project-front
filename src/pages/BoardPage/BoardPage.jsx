/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';

function BoardPage(props) {
    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>학생용</button>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <div css={s.boardPageTitle}>
            제목
        </div>
        <div> 작성시간 </div>
        <div css={s.boardListLayout}>
            <li>
                <div>글쓴이</div>
                <div>조회수</div>
                <div>댓글수</div>
            </li>
        </div>
    </div>
    );
}

export default BoardPage;