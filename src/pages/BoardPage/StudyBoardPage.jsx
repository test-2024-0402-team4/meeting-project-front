/** @jsxImportSource @emotion/react */
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteStudyBoardRequest, getSingleStudyBoardReqeust, getUserGenderType, getUserIdByStudyBoardIdRequest, updateStudyBoardViewCountRequest } from "../../apis/api/studyBoardApi";
import StudyComment from "../../components/StudentComment/StudyComment";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { getStudentIdRequest, getTeacherIdRequest } from "../../apis/api/boardApi";


function StudyBoardPage(props) {

    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));
    const [userId, setUserId] = useState(0);
    const [userIdByBoard , setUserIdByBoard] = useState();
    const [genderType , setGenderType] = useState();
    const [roleId , setRoleId] = useState(0);
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const principalData = queryClient.getQueryData("principalQuery");

    useEffect(() => {
        setUserId(principalData?.data.userId)

    },[]);

    const updateViewCount = useQuery(
        ["updateViewCount"],
        async () => await updateStudyBoardViewCountRequest(params?.studyBoardId),
        {
            refetchOnWindowFocus: false,
            onSuccess: () => {
                getBoardQuery.refetch();
            }
        }
    )


    const getUserIdByBoardId = useQuery(
        ["getUserIdByBoardId"],
        async() => await getUserIdByStudyBoardIdRequest(params.studyBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                setUserIdByBoard(response.data.userId);
            }
        }
    );
    
    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleStudyBoardReqeust(params.studyBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
               setTimeStamp(() => response.data.createDate)
                console.log(response.data);
            }
        }
    );

    const getUserGender = useQuery(
        ["getUserGender",userIdByBoard],
        async() => await getUserGenderType(userIdByBoard),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                  setGenderType(() => response.data.genderType);
            },
            onError: error => {
            },
            enabled: !!userIdByBoard
        }
    );





    const deleteBoardMutation = useMutation({
        mutationKey:"deleteBoardMutation",
        mutationFn: deleteStudyBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            navigate("/study/boards?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
        deleteBoardMutation.mutate(params.studyBoardId);
        }
    }

    const handleDeclareClick = () => {
        navigate(`/notice/declare/study/${params.studyBoardId}`);
    }
    
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
        {roleId === 1 ? (
        <>
            <button css={s.authorityButton} onClick={() => linkToStudent()}>학생용</button>
            <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
        </>
    ) : roleId === 2 ? (
        <>
            <button css={s.authorityButton} onClick={() => linkToTeacher()}>선생님용</button>
            <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
        </>
    ) : roleId === 3 ? (
        <>
            <button css={s.authorityButton} onClick={() => linkToStudent()}>학생용</button>
            <button css={s.authorityButton} onClick={() => linkToTeacher()}>선생님용</button>
            <button css={s.authorityButton} onClick={() => linkToStudy()}>공부방</button>
        </>
    ):null}
        </div>
        
        <div css={s.boardListLayout}>

           <div css={s.boardPageProfile}>
                <div css={s.boardPageMainHeader}>
                    
                {genderType === "남" ? 
                (
                <div css={s.boardPageProfileImg}>
                    <img src="https://kimstudy.com/_next/static/media/circle_profile_boy.d886bf1c.svg" alt="" />
                </div>
                ) 
                : 
                (
                <div css={s.boardPageProfileImg}>
                    <img src="https://kimstudy.com/_next/static/media/circle_profile_girl.93ffff47.svg" alt="" />
                </div>
                )}
                        <div>
                            <div css={s.title}> {singleBoard.title}</div>
                            <div css={s.nick}> 
                                <div>
                                    {singleBoard.nickname}  
                                </div>
                                <div>
                                    /
                                </div>
                                <div>
                                    {formattedTime} 
                                </div>
                            </div>
                        </div>
                </div>
                <div css={s.optionButtons}>
                <div css={s.boardPageViewCount}>
                <div css={s.viewIcon}>
                        <GrView />
                    </div>
                    {singleBoard.viewCount}</div>
                    {
                        roleId === 3 ? 
                        <div css={s.buttonLayout}>
                            <button css={s.optionButton} onClick={handleDeleteClick}>삭제</button>                    
                        </div>
                    :
                        userId === userIdByBoard ?
                        <div css={s.buttonLayout}>
                            <Link to={`/study/board/update/${singleBoard.studyBoardId}`}>
                            <button css={s.optionButton}>수정</button>
                            </Link>
                            <button css={s.optionButton} onClick={handleDeleteClick}>삭제</button>
                        </div>
                    :
                        <div css={s.blank}>
                            <button onClick={handleDeclareClick} css={s.optionButton}>신고</button>
                        </div>
                    }
                </div>
           </div>

           <div css={s.boardPageMain}>
                <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
           </div>
           
            
        </div>
        
        <div>
            
        </div>

                <StudyComment userId1={userId} roleId={roleId}/>
    </div>
    );
}

export default StudyBoardPage;