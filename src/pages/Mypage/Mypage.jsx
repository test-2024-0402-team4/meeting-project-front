/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentMypageCount, getStudentProfile, getStudyMypageCount, searchStudentMypageBoardsRequest, searchStudyMypageBoardsRequest } from "../../apis/api/profileApi";
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSearchBoardInput } from "../../hooks/useSearchBoardInput";
import { IoSearchOutline } from "react-icons/io5";
import GetTime from "../../components/GetTime/GetTime";
import StudentProfileCount from "../../components/BoardPageCount/StudentProfileCount";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import { getApplicationDetails} from "../../apis/api/teacherProfile";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
import StudentProfileStudyCount from "../../components/BoardPageCount/StudentProfileStudyCount";
import { disableAccount } from "../../apis/api/adminApi";
import { FaUniversity } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";

function Mypage(props) {
    const { userId } = useParams();
    useAuthCheck();
    useStudentCheck();
    
    const [roleId, setRoleId] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCount = 5;
    const [boardList, setBoardList] = useState([]);
    const [timeStamp,setTimeStamp] = useState([]);
    const [boardList1, setBoardList1] = useState([]);
    const [timeStamp1,setTimeStamp1] = useState([]);
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
            // console.log(teacherProfile)
        }
    }, [studentProfileQuery.data?.data?.userId]);


    const principalQuery = useQuery(
        ["principalQuery", userId],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                // console.log("principal Success");
                // console.log(response);
                setRoleId(response.data.roleId)
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
               
                // console.log(response.data);
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
                // console.log(response);
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    const searchSubmit1 = () => {
        if(userId){
            setSearchParams({
                page:1
            })
            searchStudyBoardQuery.refetch();
        }
    }

    const searchText1 = useSearchBoardInput(searchSubmit1);

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
                
                setBoardList1(() => response.data.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ))
                setTimeStamp1(() => response.data.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ))
               
                // console.log(response.data);
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
                // console.log(response);
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    const handleModifyOnClick = () => {
        navigate(`/student/mypage/modify?userId=${userId}`);
    }

    const handleApplicationDetails = () => {
        getApplicationDetails(studentProfileQuery.data?.data?.userId)
            .then(response => {
                setTeacherProfile(response.data);
                // console.log(response.data)
                
            })
            .catch(error => {
                // 오류 처리
                console.error('Error fetching application details:', error);
            });
            
    }

    const handleDisableAccount = () => {
        if(window.confirm("계정을 비활성화 하시겠습니까?")) {
            try {
                disableAccount(userId);
                alert("계정이 비활성화 되었습니다")
            } catch (error) {
                alert(error.response.data)
            }
            
        }
    }
 
    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    {studentProfileQuery.isLoading ? (
                        <></>
                    ) : (
                        <div css={s.profile}>
                            <div css={s.profileUpdateButton}>
                                {
                                    roleId === 3 ?
                                    <button onClick={handleDisableAccount}>계정 비활성화</button> 
                                    :
                                    <button onClick={handleModifyOnClick}>정보 수정</button> 
                                }
                            </div>
                            
                            <ProfileImg userId={studentProfileQuery.data?.data?.userId} profileUrl={studentProfileQuery?.data.data?.userImgUrl}/>
    
                            <div>
                                <span>
                                    {studentProfileQuery.data.data?.nickname}
                                </span>
                                <span css={s.roleName}>
                                    {studentProfileQuery.data.data?.roleNameKor}
                                </span>
                            </div>
                            <div>
                                <span css={s.gender}>
                                    {studentProfileQuery.data.data?.genderType}학생
                                </span>
                                <span>
                                    {studentProfileQuery.data.data?.regionName}
                                </span>
                                <div css={s.email}>
                                    이메일 : {studentProfileQuery.data.data?.email}
                                </div>
                            </div>
                        </div>
                    )}
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
                        <div onClick={() =>setContent(2)}>
                            공부방
                        </div>
                        {
                            content === 0 ? <></> :
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
                        
                        {content === 0 && (
                            <>
                                {teacherProfile?.length === 0 ? (
                                    <div css={s.teacherProfile2}>
                                        <h2 css={s.noSearch}>신청내역이 없습니다.</h2>
                                    </div>
                                ) : (
                                    teacherProfile?.map(teacherProfile => (
                                        <div key={teacherProfile.userId} css={s.teacherProfile}>
                                            <div css={s.imgLayout}>
                                                <img src={teacherProfile.userImgUrl}/>
                                            </div>
                                            <div onClick={() => navigate(`/student/tutor?userId=${teacherProfile.userId}`)} css={s.teacherProfileContent}>
                                                <div>{teacherProfile.nickname}</div>
                                                <div>
                                                    <span><FaUniversity /> {teacherProfile.universityName} </span>
                                                    <span>{teacherProfile.departmentName} </span>
                                                </div>
                                                <div><BiSolidBookAlt /> 
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
                                    ))
                                )}
                            </>
                        )}
        
                        {content === 1 && (
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
                        )}
        
                        {content === 2 && (
                            <div css={s.mypageContent}>
                                <li css={s.boardListHeader}>
                                    <div>제목</div>
                                    <div>작성시간</div>
                                    <div>조회수</div>
                                </li>
                                <div css={s.contentListLayout}>
                                    {boardList1.map(board => (
                                        <Link to={`/study/board/${board.studyBoardId}`} css={s.boardListItem} key={board.studyBoardId}>
                                            <li>
                                                <div>{board.title}</div>
                                                <div>{GetTime(new Date(board.createDate))}</div>
                                                <div>{board.viewCount}</div>
                                            </li>
                                        </Link>    
                                    ))}
                                </div>
                            </div>
                        )}
                    
                    

                    {content === 0 ? null : 
                    content === 1 ?(
                        <div css={s.pageNumber}>
                        <div css={s.page}>
                            <StudentProfileCount boardCount={getStudentMypageCountQuery.data?.data}/>
                        </div>
                    </div>  
                    ) : <div css={s.pageNumber}>
                    <div css={s.page}>
                        <StudentProfileStudyCount boardCount={getStudyMypageCountQuery.data?.data}/>
                    </div>
                </div>} 
                </div>             
            </div>
        </div>
    );
}    
export default Mypage;