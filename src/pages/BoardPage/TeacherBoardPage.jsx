/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTeacherBoardRequest, getSingleTeacherBoardReqeust, getTeacherGenderType, updateTeacherBoardViewCountRequest } from "../../apis/api/teacherBoardApi";
import TeacherComment from "../../components/StudentComment/TeacherComment";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getTeacherIdByTeacherBoardIdRequest, getTeacherIdRequest, updateBoardViewCountRequest } from "../../apis/api/boardApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";

function TeacherBoardPage(props) {
    useAuthCheck();
    useTeacherCheck();
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");

    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));
    const [userId, setUserId] = useState("");
    const [teacherId, setTeacherId] = useState();
    const [userIdByBoard , setUserIdByBoard] = useState();
    const [genderType , setGenderType] = useState();
    const [ roleId, setRoleId ] = useState(0);
    const navigate = useNavigate();

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
                console.log(response);
                setUserId(response.data.userId);
                setRoleId(response.data.roleId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );

    const updateViewCount = useQuery(
        ["updateViewCount"],
        async () => await updateTeacherBoardViewCountRequest(params?.teacherBoardId),
        {
            refetchOnWindowFocus: false,
            onSuccess: () => {
                getBoardQuery.refetch();
            }
        }
    )
  
    const getTeacherId = useQuery(
      ["getTeacherId",userId],
      async() => await getTeacherIdRequest(userId),
      {
          refetchOnWindowFocus : false,
          onSuccess: response => {
                console.log(response);
                setTeacherId(response.data.teacherId);
          },
          onError: error => {
            console.log(userId);
          },
          enabled: !!userId
      }
  );
  console.log(teacherId);

  const getTeacherIdByBoardId = useQuery(
    ["getTeacherIdByBoardId"],
    async() => await getTeacherIdByTeacherBoardIdRequest(params.teacherBoardId),
    {
        refetchOnWindowFocus : false,
        onSuccess: response => {
            console.log(response.data.teacherId);
            setUserIdByBoard(response.data.teacherId);
        }
    }
);

const getTeacherGender = useQuery(
    ["getTeacherGender",teacherId],
    async() => await getTeacherGenderType(teacherId),
    {
        refetchOnWindowFocus : false,
        onSuccess: response => {
              console.log(response);
              setGenderType(() => response.data.genderType);
        },
        onError: error => {
          console.log(teacherId);
        },
        enabled: !!teacherId
    }
);

    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleTeacherBoardReqeust(params.teacherBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
               setTimeStamp(() => response.data.createDate)
                console.log(response.data);
            }
        }
    );

    const deleteBoardMutation = useMutation({
        mutationKey:"deleteBoardMutation",
        mutationFn: deleteTeacherBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            navigate("/teacher/boards?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
        deleteBoardMutation.mutate(params.teacherBoardId);
        }
    }

    console.log(teacherId);
    console.log(userIdByBoard);

    const handleDeclareClick = () => {
        navigate(`/notice/declare/teacher/${params.teacherBoardId}`);
    }
    const linkToStudy = () => {
        navigate("/study/boards?page=1")
    }
    const linkToTeacher = () => {
        navigate("/teacher/boards?page=1")
    }

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton} onClick={() => linkToTeacher}>선생님용</button>
            <div></div>
            <button css={s.authorityButton} onClick={() => linkToStudy}>공부방</button>
        </div>

        <div css={s.boardListLayout}>
           <div css={s.boardPageProfile}>
                <div css={s.boardPageMainHeader}>
                    {
                        genderType === "남" ? 
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
                        )
                    }                       
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
                        <div css={s.headbutton}>
                            <div css={s.viewIcon}><GrView /></div>
                            {singleBoard.viewCount}
                        </div>
                    </div>

                    {
                        roleId === 3 ? 
                        <>
                            <button css={s.optionButton} onClick={handleDeleteClick}>삭제</button>
                        </>
                        :
                        teacherId === userIdByBoard ?
                        <div css={s.modi}>    
                            <Link to={`/teacher/board/update/${singleBoard.teacherBoardId}`}>
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
            <TeacherComment roleId={roleId} userId={userId}/>
    </div>
    );
}

export default TeacherBoardPage;