/** @jsxImportSource @emotion/react */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import { getTeacherCount, searchTeacherBoardListRequest, updateTeacherBoardViewCountRequest } from "../../apis/api/teacherBoardApi";
import TeacherBoardPageCount from "../../components/BoardPageCount/TeacherBoardPageCount";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
import { GrView } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";

function TeacherBoardListPage(props) {
    useAuthCheck();
    useTeacherCheck();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const navigate = useNavigate();
   
   
   

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
        navigate("/study/boards?page=1")
    }
    const linkToTeacher = () => {
        navigate("/teacher/boards?page=1")
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
                {
                boardList.map(
                    board => 
                    <Link to=
                    {`/teacher/board/${board.teacherBoardId}`} 
                    css={s.boardListItem} 
                    key={board.teacherBoardId}
                    >

<li>
                            <div css={s.boardTitle}>{board.title}</div>

                            <div css={s.lc}>

                                <div css={s.listBottom1}>
                                {
                                board.genderId === 1 ? 
                                    (
                                    <div css={s.genderImg}>
                                        <img src="https://kimstudy.com/_next/static/media/circle_profile_boy.d886bf1c.svg" alt="" />
                                    </div>
                                    ) 
                                    : 
                                    (
                                    <div css={s.genderImg}>
                                        <img src="https://kimstudy.com/_next/static/media/circle_profile_girl.93ffff47.svg" alt="" />
                                    </div>
                                    )
                                }
                                    <div css={s.nick}>{board.nickname}</div>
                                    <div css={s.date}>{GetTime(new Date(board.createDate))}</div>
                                </div>

                                <div css={s.Count}> 
                                    <div css={s.commentCount}>
                                        <div css={s.commentIcon}><FaRegComment /></div>
                                        <div>{board.commentCount}</div>
                                    </div>
                                    <div css={s.viewCount}>
                                        <div css={s.view}>
                                            <GrView /> 
                                        </div>
                                        <div >
                                            {board.viewCount}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
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