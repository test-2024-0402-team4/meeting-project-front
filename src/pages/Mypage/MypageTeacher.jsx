/** @jsxImportSource @emotion/react */
import * as s from "./teacherStyle";

import { getPrincipalRequest } from "../../apis/api/principal";
import React, { useEffect, useState } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import TeacherProfileCount from "../../components/BoardPageCount/TeacherprofileCount";
import { getTeacherMypageCount, getTeacherMypageProfile, searchTeacherMypageBoardsRequest } from "../../apis/api/teacherProfile";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import { CiLocationOn } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";

function MypageTeacher(props) {
    useAuthCheck();
    useTeacherCheck();

    const { userId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const queryClient = useQueryClient();
    const [content, setContent] = useState(0);

    const principalData = queryClient.getQueryData("principalQuery");

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
                        teacherProfileQuery.isLoading ? 
                        <></>
                        :
                        <div css={s.teacherProfile}>
                            <div css={s.profileHeader}>                                
                                <div css={s.imgBox}> 
                                    <ProfileImg userId={teacherProfileQuery.data?.data?.userId} profileUrl={teacherProfileQuery.data?.data?.userImgUrl}/>
                                </div>
                                <div css={s.profileUpdateButton}>
                                    <button onClick={handleModifyOnClick}>정보 수정</button> 
                                </div>
                                <div css={s.profileContent}>
                                    <div>{teacherProfileQuery?.data.data.nickname}</div>
                                    <div>
                                        <span>{teacherProfileQuery?.data.data.universityName}</span>
                                        <span>{teacherProfileQuery?.data.data.departmentName}</span>
                                    </div>
                                    <div>
                                        <div>
                                            <CiLocationOn />
                                        </div>
                                        <div>
                                            <span>
                                                지역 : 
                                            </span>
                                            <span>
                                            {
                                                teacherProfileQuery?.data.data.dateNames.length === 0 ?
                                                "필수정보를 입력하세요" 
                                                :
                                                teacherProfileQuery?.data.data.dateNames.map(regionName => regionName).join(", ")
                                            }
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <FiBook />
                                        </div>
                                        <div>
                                            <span>
                                                과목 :
                                            </span>
                                            <span>                                                
                                            {
                                                teacherProfileQuery?.data.data.subjectNames.length === 0 ?
                                                "필수정보를 입력하세요" 
                                                :
                                                teacherProfileQuery?.data.data.subjectNames.map(regionName => regionName).join(", ")
                                            }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div onClick={() => setContent(0)}>
                            내 프로필
                        </div>
                        <div onClick={() => setContent(1)}>
                            내가 쓴 글
                        </div>
                        {
                            content === 0 ? <></>
                            :
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
                        }
                    </div>
                    {
                        content === 0 ? 
                        <> {
                            teacherProfileQuery.isLoading ? 
                            <>
                            </>
                            :
                            <>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    선생님 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        성별
                                    </div>
                                    <div>
                                        {teacherProfileQuery?.data.data.genderType}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만 25세
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대학 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        대학명
                                    </div>
                                    <div>
                                        {teacherProfileQuery?.data.data.universityName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        학과명
                                    </div>
                                    <div>
                                        {teacherProfileQuery?.data.data.departmentName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        재학상태
                                    </div>
                                    <div>
                                        {teacherProfileQuery?.data.data.graduateState}
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대면 수업 가능 지역
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        지역
                                    </div>
                                    <div>
                                    {
                                        teacherProfileQuery?.data.data.regionNames.length === 0 ?
                                        "필수정보를 입력하세요"
                                        :
                                        teacherProfileQuery?.data.data.regionNames.map(regionName => regionName).join(", ")
                                    }
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대면 수업 가능 요일
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        요일
                                    </div>
                                    <div>
                                        {
                                            teacherProfileQuery?.data.data.dateNames.length === 0 ?
                                             "필수정보를 입력하세요" 
                                            :
                                            teacherProfileQuery?.data.data.dateNames.map(regionName => regionName).join(", ")
                                        }
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 과목
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        과목
                                    </div>
                                    <div>
                                        {
                                            teacherProfileQuery?.data.data.subjectNames.length === 0 ?
                                             "필수정보를 입력하세요" 
                                            :
                                            teacherProfileQuery?.data.data.subjectNames.map(regionName => regionName).join(", ")
                                        }
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 소개
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        한줄 소개
                                    </div>
                                    <div>
                                        {
                                            teacherProfileQuery?.data.data.teacherIntroduceContent === null ?
                                             "필수정보를 입력하세요" 
                                            :
                                            teacherProfileQuery?.data.data.teacherIntroduceContent

                                        }
                                    </div>
                                </div>
                            </div>
                            </>

                        }
                            
                        </>
                        :
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
                    }                                      
                </div>                
            </div>
        </div>
    );
}

export default MypageTeacher;