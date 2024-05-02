/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import { getTeacherCount, searchTeacherBoardListRequest, updateTeacherBoardViewCountRequest } from "../../apis/api/teacherBoardApi";
import TeacherBoardPageCount from "../../components/BoardPageCount/TeacherBoardPageCount";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";

function TeacherBoardListPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 11;
    const [boardList, setBoardList] = useState([]);

    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

   
   
   

    const searchSubmit = () => {
        setSearchParams({
            page:1
        })
        searchBoardQuery.refetch();
    }

    const searchText = useSearchBoardInput(searchSubmit);
    
    const searchBoardQuery = useQuery(
        ["searchBoardQuery",searchParams.get("page")],
        async() => await searchTeacherBoardListRequest({
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

    const getStudentCountQuery = useQuery(
        ["getStudentCountQuery",searchBoardQuery.data],
        async() => await getTeacherCount({
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

    const linkToStudy = () => {
        window.location.replace("/study/boards?page=1")
    }
    const linkToTeacher = () => {
        window.location.replace("/teacher/boards?page=1")
    }
    
    return (
        <div css={s.layout}>
            <div css={s.authority}>
                <button css={s.authorityButton} onClick={() => linkToTeacher()}>선생님용</button>
                <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
            </div>
        
            <div css={s.searchInput}>
                <div css={s.searchContainer}>
                    <input css={s.inputBox} type="text" 
                    placeholder="검색어를 입력하세요"
                    value={searchText.value}
                    onChange={searchText.handleOnChange}
                    onKeyDown={searchText.handleOnKeyDown}/>
                    <button onClick={searchSubmit} css={s.searchButton}><IoSearchOutline /></button>
                </div>
            </div>

            <div css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                    <div>제목</div>
                    <div>글쓴이</div>
                    <div>작성시간</div>
                    <div>조회수</div>
                </li>
                {
                boardList.map(
                    board => 
                    <Link to=
                    {`/teacher/board/${board.teacherBoardId}`} 
                    css={s.boardListItem} 
                    key={board.teacherBoardId}
                    >

                        <li >
                            <div>{board.title}</div>
                            <div>author</div>
                            <div>{GetTime(new Date(board.createDate))}</div>
                            <div>{board.viewCount}</div>
                         </li>
                    </Link>
                    
                    
                    )
                }
            
            </div>
                <Link to={"/teacher/board"} css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </Link>
                
            <div css={s.pageNumber}>
                
              <TeacherBoardPageCount boardCount={getStudentCountQuery.data?.data}/>
            </div>
        </div>
    );
}

export default TeacherBoardListPage;