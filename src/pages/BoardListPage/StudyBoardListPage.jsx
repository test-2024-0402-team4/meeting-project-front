/** @jsxImportSource @emotion/react */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import { getTeacherCount, searchTeacherBoardListRequest } from "../../apis/api/teacherBoardApi";
import { getStudyCount, searchStudyBoardListRequest, updateStudyBoardViewCountRequest } from "../../apis/api/studyBoardApi";
import StudyBoardPageCount from "../../components/BoardPageCount/StudyBoardPageCount";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { GrView } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";



function StudyBoardListPage(props) {

    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);

    const [roleId , setRoleId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setRoleId(principalData?.data?.roleId);
    }, [])

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
            retry: 0,
            refetchOnWindowFocus : false,
            onSuccess: response => {
                setBoardList(() => response.data?.map(
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

    const getStudyCountQuery = useQuery(
        ["getStudyCountQuery",searchStudyBoardQuery?.data],
        async() => await getStudyCount({
            count: searchCount,
            searchText: searchText.value
        }),
        {
            enabled: !!searchStudyBoardQuery?.data?.data,
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
    const linkToStudent = () => {
        navigate("/student/boards?page=1")
    }
    const linkToTeacher = () => {
        navigate("/teacher/boards?page=1")
    }
    
    return (
        <div css={s.layout}>
            <div css={s.authority}>
            {
                roleId === 1
                ?
                (
                <>
                    <button css={s.authorityButton} onClick={() => linkToStudent()}>학생용</button>
                    <div></div>
                    <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
                </>
                )
                : roleId === 2
                ?
                (
                <>
                    <button css={s.authorityButton} onClick={() => linkToTeacher()}>선생님용</button>
                    <div></div>
                    <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
                </>
                )
                : null
            }
            </div>
            <div css={s.head}>
                <span>커뮤니티</span>
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
                    boardList.map(board => 
                        <Link to={`/study/board/${board.studyBoardId}`} css={s.boardListItem} key={board.studyBoardId}>
                        <>
                            <div css={s.boardTitle}>{board.title}</div>
                            <div css={s.lc}>

                                <div css={s.f}>
                                    <div css={s.listBottom1}>
                                        {
                                            board.genderId === 1
                                            ?
                                            <div css={s.a}>
                                                {
                                                    <div css={s.genderImg}>
                                                        <img src="https://kimstudy.com/_next/static/media/circle_profile_boy.d886bf1c.svg" alt="" />
                                                    </div>
                                                }
                                            </div>
                                            :
                                            <div>
                                                {
                                                    <div css={s.genderImg}>
                                                        <img src="https://kimstudy.com/_next/static/media/circle_profile_girl.93ffff47.svg" alt="" />
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div css={s.nickLayout}>
                                    <div css={s.nick}>{board.nickname}</div>
                                    <div css={s.date}>{GetTime(new Date(board.createDate))}</div>
                                    </div>
                                </div>

                                
                                <div css={s.d}>
                                    <div css={s.e}>
                                        <div css={s.commentCount}>
                                            <div><FaRegComment /> {board.commentCount}</div>
                                        </div>

                                        <div css={s.viewCount}>
                                            <div><GrView /> {board.viewCount}</div>
                                        </div>
                                        
                                    </div>

                                   
                                </div>
                                
                            </div>
                        </>
                    </Link>
                    )
                }
            </div>

            <div css={s.submit}>
                <Link to={"/study/board"} css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </Link>
            </div>
                
            <div css={s.pageNumber}>
                <StudyBoardPageCount boardCount={getStudyCountQuery.data?.data}/>
                
            </div>
        </div>
    );
}

export default StudyBoardListPage;