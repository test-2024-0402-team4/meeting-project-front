/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React from 'react';

function BoardListPage(props) {

    const moveToBoardPage = () => {
        window.location.replace("/board/comment")
    };
    return (
        <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>학생용</button>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <h1 css={s.headerTitle}>게시글목록</h1>
       
        <div css={s.searchInput}>
            검색
            <input css={s.inputBox} type="text" />
        </div>

        <div css={s.boardListLayout}>
            <li css={s.boardListHeader}>
                <div>번호</div>
                <div>제목</div>
                <div>글쓴이</div>
                <div>작성시간</div>
                <div>조회수</div>
            </li>
            <div css={s.boardListItem}>
            <li onClick={moveToBoardPage}>
                <div>number </div>
                <div>title</div>
                <div>author</div>
                <div>time</div>
                <div>much</div>
            </li>
            </div>
            
        </div>
            <div css={s.writeButtonLayout}>
                <button css={s.writeButton}>작성하기</button>
            </div>
        <div css={s.pageNumber}>
            페이지
        </div>
        <footer>
            sdf
        </footer>
        </div>
    );
}

export default BoardListPage;