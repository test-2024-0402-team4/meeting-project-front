/** @jsxImportSource @emotion/react */
import * as s from "./teacherStyle";

import { getPrincipalRequest } from "../../apis/api/principal";
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import { getTeacherMypageProfile, getTeacherStudyMypageCount, searchTeacherStudyMypageBoardsRequest } from "../../apis/api/teacherProfile";
import TeacherProfileStudyCount from "../../components/BoardPageCount/TeacherProfileStudyCount";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";

function MypageTeacherStudy(props) {
    useAuthCheck();
    useTeacherCheck();


    const [searchParams, setSearchParams] = useSearchParams();
    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const [userId , setUserId] =useState(profile?.data?.userId || ""); 
    const navigate = useNavigate(); 

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                // console.log("principal Success");
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );

    useEffect(() => {
        if (userId) {
            const fetchProfile = async () => {
                try {
                    const profileData = await getTeacherMypageProfile(userId);
                    setProfile(profileData);
                } catch (error) {
                    console.log("에러");
                }
            };
            fetchProfile();
        }
    }, [userId]);

    const searchSubmit = () => {
        if(userId){
            setSearchParams({
                page:1
            })
            searchTeacherStudyBoardQuery.refetch();
        }
    }

    const searchText = useSearchBoardInput(searchSubmit);

    const searchTeacherStudyBoardQuery = useQuery(
        ["searchTeacherStudyBoardQuery",userId,searchParams.get("page")],
        async() => await searchTeacherStudyMypageBoardsRequest(userId,{
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

    const getTeacherStudyMypageCountQuery = useQuery(
        ["getTeacherStudyMypageCountQuery",userId,searchTeacherStudyBoardQuery.data],
        async() => await getTeacherStudyMypageCount(userId,{
            count: searchCount,
            searchText: searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            enabled: !!userId,
            onSuccess: response => {
                // console.log(response);
            },
            onError: error => {
                console.log(error);
            }
        }
    );

// console.log(profile.data.data.genderType);
console.log(searchParams.get("page"));

const myBoard = () => {
    navigate(`/teacher/${userId}/mypage?page=1`);
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
                            <span>
                                {profile.data?.genderType}
                            </span>
                            <span>
                                {profile.data?.regionName}
                            </span>
                        </div>
                    </div>
                </div>

                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div onClick={() => myBoard()}>
                            내 프로필
                        </div>
                        <div></div>
                        <div onClick={() => myBoard()}>
                            내가 쓴 글
                        </div>
                        <div></div>
                        <div onClick={() => myBoard()}>공부방</div>
                        <div></div>
                        <div></div>
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
                        <TeacherProfileStudyCount boardCount={getTeacherStudyMypageCountQuery.data?.data}/>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
    );
}

export default MypageTeacherStudy;