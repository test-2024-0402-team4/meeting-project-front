/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { getPrincipalRequest } from "../../apis/api/principal";
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import TeacherProfileCount from "../../components/BoardPageCount/TeacherprofileCount";
import { getTeacherMypageCount, getTeacherMypageProfile, searchTeacherMypageBoardsRequest } from "../../apis/api/teacherProfile";
import ProfileImg from "../../components/ProfileImg/ProfileImg";

function MypageTeacher(props) {
    const { userId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);

    const teacherProfileQuery = useQuery(
        ["teacherProfileQuery"],
        async () => await getTeacherMypageProfile(userId),
        {   
            refetchOnWindowFocus: false
        }
    )
    
    console.log(teacherProfileQuery);
    const searchSubmit = () => {
        if(userId){
            setSearchParams({
                page:1
            })
            searchTeacherBoardQuery.refetch();
        }
    }

    const searchText = useSearchBoardInput(searchSubmit);

    const searchTeacherBoardQuery = useQuery(
        ["searchTeacherBoardQuery",userId,searchParams.get("page")],
        async() => await searchTeacherMypageBoardsRequest(userId,{
            page: searchParams.get("page"),
            count: searchCount,
            searchText: searchText.value 
        }),
        {
            refetchOnWindowFocus : false,
            enabled: !!userId,
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

    const getTeacherMypageCountQuery = useQuery(
        ["getTeacherMypageCountQuery",userId,searchTeacherBoardQuery.data],
        async() => await getTeacherMypageCount(userId,{
            count: searchCount,
            searchText: searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            enabled: !!userId,
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            }
        }
    );
    const handleModifyOnClick = () => {
        window.location.replace(`/teacher/mypage/modify?userId=${userId}`);
    }

    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    {
                        teacherProfileQuery.isLoading 
                        ?   <></> 
                        :   <div css={s.profile}>
                                <div css={s.profileUpdateButton}>
                                    <button onClick={handleModifyOnClick}>정보 수정</button> 
                                </div>
                                
                                    <ProfileImg userId={teacherProfileQuery.data?.data?.userId} profileUrl={teacherProfileQuery?.data.data?.userImgUrl}/>
                                
                                <div>
                                    <span>
                                        {teacherProfileQuery.data.data?.nickname}
                                    </span>
                                    <span css={s.roleName}>
                                    {teacherProfileQuery.data.data?.email}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                    {teacherProfileQuery.data.data?.genderType}
                                    </span>
                                    <span>
                                    수업가능지역 : {teacherProfileQuery.data.data?.regionNames}
                                    </span>
                                </div>
                            </div> 
                    }
                    
                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div>
                            신청 내역
                        </div>
                        <div>
                            내가 쓴 글
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
                    </div>
                    <div css={s.mypageContent}>

                    <li css={s.boardListHeader}>
                    <div>제목</div>
                    <div>작성시간</div>
                    <div>조회수</div>
                </li>

                <div css={s.contentListLayout}>
                    {
                    boardList.map(
                        board => 
                        <Link to={`/teacher/board/${board.teacherBoardId}`} css={s.boardListItem} key={board.teacherBoardId}>

                            <li>
                                <div>{board.title}</div>
                                <div>{GetTime(new Date(board.createDate))}</div>
                                <div>{board.viewCount}</div>
                            </li>
                        </Link>    
                        )
                    }
                </div>
                <div css={s.pageNumber}>
                    <div css={s.page}>
                        <TeacherProfileCount boardCount={getTeacherMypageCountQuery.data?.data}/>
                    </div>
                </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default MypageTeacher;