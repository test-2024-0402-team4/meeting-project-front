/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useState } from 'react';
import { useQuery } from "react-query";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { getNoticeCount, searchNoticeBoardListRequest } from "../../apis/api/boardApi";
import NoticeBoardPageCount from "../../components/BoardPageCount/NoticePageCount";
import { IoSearchOutline } from "react-icons/io5";

function NoticeBoardListPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);

   
   

    const searchSubmit = () => {
        setSearchParams({
            page:1
        })
        searchNoticeBoardQuery.refetch();
    }

    const searchText = useSearchBoardInput(searchSubmit);
    
    const searchNoticeBoardQuery = useQuery(
        ["searchNoticeBoardQuery",searchParams.get("page")],
        async() => await searchNoticeBoardListRequest({
            page: searchParams.get("page"),
            count: searchCount,
            searchText: searchText.value 
        }),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                setBoardList(() => response.data.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ));
                console.log(response.data);
            }
        }
    );

    const getNoticeCountQuery = useQuery(
        ["getNoticeCountQuery",searchNoticeBoardQuery.data],
        async() => await getNoticeCount({
            count: searchCount,
            searchText: searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            }
        }
    );
    
    return (
        <div css={s.layout}>
           
            <h1 css={s.headerTitle}>공지사항</h1>
        
            <div css={s.searchInput}>
                <div css={s.searchContainer}>
                    <input css={s.inputBox} type="text" 
                    placeholder="공지사항 검색"
                    value={searchText.value}
                    onChange={searchText.handleOnChange}
                    onKeyDown={searchText.handleOnKeyDown}/>
                    <button onClick={searchSubmit} css={s.searchButton} ><IoSearchOutline /></button>
                </div>
            </div>

            <div css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                   
                    <div>제목</div>
                    <div>작성시간</div>
                    <div>조회수</div>
                </li>
                {
                boardList.map(
                    board => 
                    <Link to={`/notice/board/${board.noticeId}`} css={s.boardListItem} key={board.noticeId}>

                        <li >
                            <div>{board.title}</div>
                            <div>{board.createDate}</div>
                            <div>{board.viewCount}</div>
                         </li>
                    </Link>
                    
                    )
                }
            
            </div>
                
            <div css={s.pageNumber}>
                
              <NoticeBoardPageCount boardCount={getNoticeCount.data?.data}/>
            </div>
        </div>
    );
}

export default NoticeBoardListPage;