/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useState } from 'react';
import { useMutation, useQuery } from "react-query";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import { getTeacherCount, searchTeacherBoardListRequest } from "../../apis/api/teacherBoardApi";
import { getStudyCount, searchStudyBoardListRequest, updateStudyBoardViewCountRequest } from "../../apis/api/studyBoardApi";
import StudyBoardPageCount from "../../components/BoardPageCount/StudyBoardPageCount";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";

function StudyBoardListPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 11;
    const [boardList, setBoardList] = useState([]);

    const searchSubmit = () => {
        setSearchParams({
            page:1
        })
        searchStudyBoardQuery.refetch();
    }

    const searchText = useSearchBoardInput(searchSubmit);
    
    const searchStudyBoardQuery = useQuery(
        ["searchStudyBoardQuery",searchParams.get("page")],
        async() => await searchStudyBoardListRequest({
            page: searchParams.get("page"),
            count: searchCount,
            searchText: searchText.value 
        }),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                setBoardList(() => response.data?.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ));
            }
        }
    );

    const getStudyCountQuery = useQuery(
        ["getStudyCountQuery",searchStudyBoardQuery?.data],
        async() => await getStudyCount({
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
    const linkToStudent = () => {
        window.location.replace("/student/boards?page=1")
    }
    const linkToTeacher = () => {
        window.location.replace("/teacher/boards?page=1")
    }
    
    return (
        <div css={s.layout}>
            <div css={s.authority}>
            
                <button css={s.authorityButton} onClick={() => linkToStudent()}>학생용</button>
            
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
                boardList?.map(
                    board => 
                    <Link to=
                    {`/study/board/${board.studyBoardId}`} 
                    css={s.boardListItem} 
                    key={board.studyBoardId}
                    >

                        <li >
                            <div>{board.title}</div>
                            <div>{board.nickname}</div>
                            <div>{GetTime(new Date(board.createDate))}</div>
                            <div>{board.viewCount}</div>
                         </li>
                    </Link>
                    
                    
                    )
                }
            
            </div>
                <Link to={"/study/board"} css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </Link>
                
            <div css={s.pageNumber}>
              <StudyBoardPageCount boardCount={getStudyCountQuery.data?.data}/>
            </div>
        </div>
    );
}

export default StudyBoardListPage;