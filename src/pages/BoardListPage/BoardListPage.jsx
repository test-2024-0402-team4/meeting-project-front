/** @jsxImportSource @emotion/react */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from "react-query";
import { getStudentCount, searchBoardListRequest, updateBoardViewCountRequest } from "../../apis/api/boardApi";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
import { GrView } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";

function BoardListPage(props) {
    useAuthCheck();
    useStudentCheck();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const navigate = useNavigate();
    
    const updateBoardViewCountMutation = useMutation({
        mutationKey:"updateBoardViewCountMutation",
        mutationFn: updateBoardViewCountRequest,
        
    });

    

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
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ))
                setTimeStamp(() => response.data.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ))
               
                console.log(response.data);
            }
        }
    );

    const getStudentCountQuery = useQuery(
        ["getStudentCountQuery",searchBoardQuery.data],
        async() => await getStudentCount({
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
    const linkToStudent = () => {
        navigate("/student/boards?page=1")
    }

    
    
    return (
        <div css={s.layout}>
            <div css={s.head}>
                <span>커뮤니티</span>
            </div>
            <div css={s.authority}>
                <button css={s.authorityButton}  onClick={() => linkToStudent()}>학생용</button>
                <div></div>
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
                    boardList.map(board => 
                        <Link to={`/student/board/${board.studentBoardId}`} css={s.boardListItem}key={board.studentBoardId}>
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
                                    <div css={s.nick}>{board.nickname}</div>
                                </div>


                                <div css={s.d}>
                                    <div css={s.e}>
                                        <div css={s.viewCount}>
                                            <div><GrView /> {board.viewCount}</div>
                                        </div>

                                        <div css={s.commentCount}>
                                            <div><FaRegComment /> {board.commentCount}</div>
                                        </div>
                                    </div>

                                    <div css={s.date}>{GetTime(new Date(board.createDate))}</div>
                                </div>

                            </div>
                        </>
                    </Link>
                    )
                }
            </div>

            <div css={s.submit}>
                <Link to={"/student/board"} css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </Link>
            </div>
                
            <div css={s.pageNumber}>
              <BoardPageCount boardCount={getStudentCountQuery.data?.data}/>
            </div>
        </div>
    );
}

export default BoardListPage;