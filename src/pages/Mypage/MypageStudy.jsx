/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentMypageCount, getStudentProfile, getStudyMypageCount, searchStudentMypageBoardsRequest, searchStudyMypageBoardsRequest } from "../../apis/api/profileApi";
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import { page } from "../../components/BoardPageCount/style";
import BoardPageCount from "../../components/BoardPageCount/BoardPageCount";
import StudentProfileCount from "../../components/BoardPageCount/StudentProfileCount";
import StudentProfileStudyCount from "../../components/BoardPageCount/StudentProfileStudyCount";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";

function MypageStudy(props) {
    useAuthCheck();
    useStudentCheck();

    const [searchParams, setSearchParams] = useSearchParams();
    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const [userId , setUserId] =useState(profile?.data?.userId || ""); 
    

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );

    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log("프로필 가져오기");
                console.log(response);
                setProfile(response);
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )
    const searchSubmit = () => {
        if(userId){
            setSearchParams({
                page:1
            })
            searchStudyBoardQuery.refetch();
        }
    }

    const searchText = useSearchBoardInput(searchSubmit);

    const searchStudyBoardQuery = useQuery(
        ["searchStudyBoardQuery",userId,searchParams.get("page")],
        async() => await searchStudyMypageBoardsRequest(userId,{
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

    const getStudyMypageCountQuery = useQuery(
        ["getStudyMypageCountQuery",userId,searchStudyBoardQuery.data],
        async() => await getStudyMypageCount(userId,{
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

console.log(profile);
console.log(searchParams.get("page"));
const myBoard = () => {
    window.location.replace(`/student/${userId}/mypage?page=1`);
}

    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileUpdateButton}>
                            <button>
                                정보 수정
                            </button> 
                        </div>
                        <div css={s.profileImgLayout}>
                            <img src={profile?.data?.userImgUrl} />
                        </div>
                        <div>
                            <span>
                                {profile.data?.nickname}
                            </span>
                            <span css={s.roleName}>
                            {profile.data?.roleNameKor}
                            </span>
                        </div>
                        <div>
                            <span css={s.gender}>
                            {profile.data?.genderType}학생
                            </span>
                            <span>
                            {profile.data?.regionName}
                            </span>
                            <div css={s.email}>
                                이메일 : {profile.data?.email}
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div onClick={() => myBoard()}>
                            신청 내역
                        </div>
                        <div onClick={() => myBoard()}>
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
                        <Link to={`/study/board/${board.studyBoardId}`} css={s.boardListItem} key={board.studyBoardId}>

                            <li>
                                <div>{board.title}</div>
                                <div>{GetTime(new Date(board.createDate))}</div>
                                <div>{board.viewCount}</div>
                            </li>
                        </Link>    
                        )
                    }
                </div>

                    </div>

                <div css={s.pageNumber}>
                    <div css={s.page}>
                        <StudentProfileStudyCount boardCount={getStudyMypageCountQuery.data?.data}/>
                    </div>
                </div>

                    
                </div>
                
            </div>
        </div>
    );
}

export default MypageStudy;