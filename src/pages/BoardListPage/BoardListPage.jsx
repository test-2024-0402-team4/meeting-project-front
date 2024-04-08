/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useState } from 'react';
import { useQuery } from "react-query";
import { searchBoardListRequest } from "../../apis/api/boardApi";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";

function BoardListPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
   

    const searchSubmit = () => {
        setSearchParams({
            page:1
        })
        searchBoardQuery.refetch();
    }

    const searchText = useSearchBoardInput(searchSubmit);
    
    const searchBoardQuery = useQuery(
        ["searchBoardQuery",searchParams.get("page")],
        async() => await searchBoardListRequest({
            page: searchParams.get("page"),
            count: searchCount,
            searchText: searchText.value 
        }),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                setBoardList(() => response.data.map(
                    book => {
                        return {
                            ...book
                        }
                    }
                ));
                console.log(response.data);
            }
        }
    );
    
    return (
        <div css={s.layout}>
            <div css={s.authority}>
                <button css={s.authorityButton}>학생용</button>
                <button css={s.authorityButton}>선생님용</button>
                <button css={s.authorityButton}>공부방</button>
            </div>
            <h1 css={s.headerTitle}>게시글목록</h1>
        
            <div css={s.searchInput}>
                <input css={s.inputBox} type="text" 
                value={searchText.value}
                onChange={searchText.handleOnChange}
                onKeyDown={searchText.handleOnKeyDown}/>
                <button onClick={() => searchSubmit}>검색</button>
            </div>

            <div css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                    <div>번호</div>
                    <div>제목</div>
                    <div>글쓴이</div>
                    <div>작성시간</div>
                    <div>조회수</div>
                </li>
                {
                boardList.map(
                    board =>
                    <Link to={`/board/student/comment/${board.studentBoardId}`} css={s.boardListItem}>

                        <li>
                            <div>{board.studentBoardId} </div>
                            <div>{board.title}</div>
                            <div>author</div>
                            <div>{board.createDate}</div>
                            <div>{board.viewCount}</div>
                         </li>
                    </Link>
                    
                    
                    )
                }
            
            </div>
                <div css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </div>
            <div css={s.pageNumber}>
                페이지
            </div>
        </div>
    );
}

export default BoardListPage;