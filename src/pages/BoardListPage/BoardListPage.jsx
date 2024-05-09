/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
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

function BoardListPage(props) {
    useAuthCheck();
    useStudentCheck();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    
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
        window.location.replace("/study/boards?page=1")
    }
    const linkToStudent = () => {
        window.location.replace("/student/boards?page=1")
    }

    
    
    return (
        <div css={s.layout}>
            <div css={s.authority}>
                <button css={s.authorityButton}  onClick={() => linkToStudent()}>학생용</button>
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
                    {`/student/board/${board.studentBoardId}`} 
                    css={s.boardListItem} 
                    key={board.studentBoardId}
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

                                <div css={s.viewCount}> 
                                    <div css={s.view}>
                                        <GrView /> 
                                    </div>
                                    <div >
                                        {board.viewCount}
                                    </div>
                                </div>
                                
                            </div>
                         </li>
                    </Link>
                    
                    
                    )
                }
            
            </div>
                <Link to={"/student/board"} css={s.writeButtonLayout}>
                    <button css={s.writeButton}>작성하기</button>
                </Link>
                
            <div css={s.pageNumber}>
                
              <BoardPageCount boardCount={getStudentCountQuery.data?.data}/>
            </div>
        </div>
    );
}

export default BoardListPage;