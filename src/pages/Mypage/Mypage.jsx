/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentMypageCount, getStudentProfile, searchStudentMypageBoardsRequest } from "../../apis/api/profileApi";
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import StudentProfileCount from "../../components/BoardPageCount/StudentProfileCount";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import { getApplicationDetails, getTeacherProfiles } from "../../apis/api/teacherProfile";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";

function Mypage(props) {
    const { userId } = useParams();
    useAuthCheck();
    useStudentCheck();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const [ content, setContent ] = useState(0)
    const [ teacherProfile, setTeacherProfile ] = useState();
    const navigate = useNavigate();

    const studentProfileQuery = useQuery(
        ["studentProfileQuery", userId],
        async() => await getStudentProfile(userId),
        {
            refetchOnWindowFocus: false
        }
    )

    useEffect(() => {
        if (studentProfileQuery.data?.data?.userId) {
            handleApplicationDetails();
            console.log(teacherProfile)
        }
    }, [studentProfileQuery.data?.data?.userId]);


    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
                console.log(response);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );

    const searchSubmit = () => {
        if(userId){
            setSearchParams({
                page:1
            })
            searchStudentBoardQuery.refetch();
        }
    }

    const searchText = useSearchBoardInput(searchSubmit);

    const searchStudentBoardQuery = useQuery(
        ["searchStudentBoardQuery",userId,searchParams.get("page")],
        async() => await searchStudentMypageBoardsRequest(userId,{
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

    const getStudentMypageCountQuery = useQuery(
        ["getStudentMypageCountQuery",userId,searchStudentBoardQuery.data],
        async() => await getStudentMypageCount(userId,{
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
        window.location.replace(`/student/mypage/modify?userId=${userId}`);
    }

    const handleApplicationDetails = () => {
        getApplicationDetails(studentProfileQuery.data?.data?.userId)
            .then(response => {
                setTeacherProfile(response.data);
                console.log(response.data)
                
            })
            .catch(error => {
                // 오류 처리
                console.error('Error fetching application details:', error);
            });
            
    }
    const myStudy = () => {
        window.location.replace(`/student/${userId}/mypage/study?page=1`);
    }

    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>

                    {
                        studentProfileQuery.isLoading
                        ?<></>
                        :
                        <div css={s.profile}>
                        <div css={s.profileUpdateButton}>
                            <button onClick={handleModifyOnClick}>정보 수정</button> 
                        </div>
                        
                        <ProfileImg userId={studentProfileQuery.data?.data?.userId} profileUrl={studentProfileQuery?.data?.data?.userImgUrl}/>

                        <div>
                            <span>
                                {studentProfileQuery.data?.data?.nickname}
                            </span>
                            <span css={s.roleName}>
                                {studentProfileQuery.data?.data?.roleNameKor}
                            </span>
                        </div>
                        <div>
                            
                            <span css={s.gender}>
                            {studentProfileQuery.data?.data?.genderType}학생
                            </span>
                            <span>
                            {studentProfileQuery.data?.data?.regionName}
                            </span>
                            <div css={s.email}>
                                이메일 : {studentProfileQuery.data?.data?.email}
                            </div>
                        </div>
                        
                    </div>
                    }

                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div onClick={() => handleApplicationDetails()}>
                            <div onClick={() => setContent(0)}>
                                신청내역
                            </div>
                        </div>
                        <div onClick={() => setContent(1)}>
                            내가 쓴 글
                        </div>
                        <div onClick={() => myStudy()}>
                            공부방
                        </div>
                        {
                            content === 0 ? 
                            <>
                            </> 
                            : 
                            <>
                            <div css={s.searchInput}>
                                <div css={s.searchContainer}>
                                    <input
                                        css={s.inputBox}
                                        type="text" 
                                        placeholder="검색어를 입력하세요"
                                        value={searchText.value}
                                        onChange={searchText.handleOnChange}
                                        onKeyDown={searchText.handleOnKeyDown}
                                    />
                                    <button onClick={searchSubmit} css={s.searchButton}><IoSearchOutline /></button>
                                </div>
                            </div>
                            </>
                        }
                    </div>
                        {
                            content === 0 ? 
                            <>
                            {
                            teacherProfile?.length === 0 
                            ? <h2 css={s.noSearch}>검색 결과가 없습니다.</h2>
                            :
                                teacherProfile?.map(
                                    teacherProfile => 
                                    <div key={teacherProfile.userId} css={s.teacherProfile}>
                                        <div css={s.imgLayout}>
                                            <img src={teacherProfile.userImgUrl}/>
                                        </div>
                                        <div onClick={() => navigate(`/student/tutor?userId=${teacherProfile.userId}`)} css={s.teacherProfileContent}>
                                            <div>{teacherProfile.nickname}</div>
                                            <div>
                                                <span>{teacherProfile.universityName} </span>
                                                <span>{teacherProfile.departmentName} </span>
                                                <span>학번 </span>
                                            </div>
                                            <div>
                                                수업 과목: {teacherProfile.subjectNames.map((subjectName, index) => (
                                                    <span key={index}>
                                                        {subjectName}
                                                        {index < teacherProfile.subjectNames.length - 1 && ','}
                                                    </span>
                                                ))}
                                            </div>
                                            <div>수업방식: {teacherProfile.classTypeNames.map((classTypeName, index) => (
                                                    <span key={index}>
                                                        {classTypeName}
                                                        {index < teacherProfile.classTypeNames.length - 1 && ','}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            </> 
                            : 
                            <>
                            <div css={s.mypageContent}>
                                <li css={s.boardListHeader}>
                                    <div>제목</div>
                                    <div>작성시간</div>
                                    <div>조회수</div>
                                </li>
                                <div css={s.contentListLayout}>
                                    {boardList.map(board => (
                                        <Link to={`/student/board/${board.studentBoardId}`} css={s.boardListItem} key={board.studentBoardId}>
                                            <li>
                                                <div>{board.title}</div>
                                                <div>{GetTime(new Date(board.createDate))}</div>
                                                <div>{board.viewCount}</div>
                                            </li>
                                        </Link>
                                    ))}
                                </div>
                               
                            </div>
                            </>
                        }
                         <div css={s.pageNumber}>
                                    <div css={s.page}>
                                        <StudentProfileCount boardCount={getStudentMypageCountQuery.data?.data}/>
                                    </div>
                                </div>
                    
                </div>                
            </div>
        </div>
    );
}

export default Mypage;