/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTeacherCommentRequest, getTeacherCommentRequest, getTeacherNickname, registerTeacherCommentRequest, updateTeacherCommentRequest } from "../../apis/api/teacherBoardApi";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import GetTime from "../GetTime/GetTime";
import { getTeacherIdRequest } from "../../apis/api/boardApi";

function TeacherComment(props) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    const [isShow, setShow] = useState(false);
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
    const [isShowDropDownById, setShowDropDownById] = useState(0);
    const commentRef = useRef();
    const commentInputRef = useRef(null);

    const [ lsTeacherId, setLsTeacherId ] =useState(0);
    const teacherUserId = lsTeacherId;
    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});
    const [timeStamp,setTimeStamp] = useState([]);
    const [userId, setUserId] = useState("");
    const [teacherId, setTeacherId] = useState();
    const [nickName , setNickName] = useState();

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
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );
  
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


    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log("프로필 가져오기");
                setProfile(response);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )

    const getTeacherNicknameRequest = useQuery(
        ["getTeacherNicknameRequest",userId],
        async() => await getTeacherNickname(userId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
                  console.log(response);
                  setNickName(response.data.nickname);
            },
            onError: error => {
              console.log(userId);
            },
            enabled: !!userId
        }
      );

    useEffect(() => {
        const token = localStorage.getItem("AccessToken");
        if (token) {
            const tokenPayLoad = token.split('.')[1];
            try {
                const decodedPayload = JSON.parse(atob(tokenPayLoad));
                setLsTeacherId(decodedPayload.teacherId);
            } catch (error) {
                console.error("Failed to decode AccessToken:", error);
                setLsTeacherId(0); // 예외 발생 시 roleId를 기본값으로 설정
            }
        } else {
            console.error("AccessToken not found in localStorage");
            setLsTeacherId(0); // AccessToken이 없을 경우 roleId를 기본값으로 설정
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (commentRef.current && !commentRef.current.contains(event.target)) {
                setShowDropDownById(0);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const getTeacherCommentQuery = useQuery(
        ["getTeacherCommentQuery"],
        async() => await getTeacherCommentRequest(params.teacherBoardId),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setComments(() => response.data.map(
                    comments => {
                        return {
                            ...comments
                        }
                    }
                ));
                setTimeStamp(() => response.data.map(
                    boards => {
                        return {
                            ...boards
                        }
                    }
                ));
                console.log(response.data);
            }
        }
    );

    const registerTeacherCommentMutation = useMutation({
        mutationKey:"registerTeacherCommentMutation",
        mutationFn: registerTeacherCommentRequest,
        onSuccess: response => {
            alert("댓글이 작성되었습니다");
            window.location.reload();
        }
    });

    const handleRegisterClick = () => {
        const comment = {
            teacherBoardId: params.teacherBoardId,
            teacherId : teacherId,
            nickname : nickName,
            comment : inputValue
        };
        console.log(comment);
        if (!inputValue.trim()) { 
            alert("내용을 작성해 주세요!"); 
            return; 
        }
        if(window.confirm("댓글을 등록하시겠습니까?")){
        registerTeacherCommentMutation.mutate(comment);
        }
    }

    const deleteTeacherCommentMutation = useMutation({
        mutationKey:"deleteTeacherCommentMutation",
        mutationFn: deleteTeacherCommentRequest,
        onSuccess: response => {
            alert("삭제가 완료되었습니다")
            window.location.reload();
        }
    });

    const handleDeleteClick = (teacherCommentId) => {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
        deleteTeacherCommentMutation.mutate(teacherCommentId);
        }
    }

    const updateTeacherCommentMutation = useMutation({
        mutationKey: "updateTeacherCommentMutation",
        mutationFn: updateTeacherCommentRequest,
        onSuccess: response => {
            alert("수정이 완료되었습니다")
            window.location.reload();
        }
    })

    const handleUpdateCompleteClick = (teacherCommentId) => {
        const updateComment = {
            teacherCommentId,
            comment: inputValue
        };
        console.log(updateComment);
        updateTeacherCommentMutation.mutate(updateComment);
    }

    const handleUpdateClick = (teacherCommentId, comment) => {
        console.log(teacherCommentId);
        console.log(comment);
        setCurrentCommentId(teacherCommentId);
        setInputValue(() => comment);
        setChangeButton(() => 1);

        if (commentInputRef.current) {
            commentInputRef.current.focus();

            const yOffset = -100; 
            const y = commentInputRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'auto' });
        }
    }

    const handleCancelClick = () => {

        setInputValue(() => "");
        setChangeButton(() => 0);
    }
    const handleDeclareClick = (teacherCommentId) => {
        window.location.replace(`/notice/declare/teacher/comment/${teacherCommentId}`);
    }

  
   
    return (
        <div css={s.commentLayout}>
              
            <div css={s.inputContainer}>
                <textarea 
                css={s.inputComment}
                 placeholder="댓글을 입력해 주세요"
                 onChange={handleInputChange}
                 value={inputValue} />
                 
                
                {
                changeButton === 1 
                ?
                <div css={s.afterChangeButton}>
                    <button  css={s.afterChangeButtons} onClick={() => handleUpdateCompleteClick(currentCommentId)}> 완료 </button>
                    <button  css={s.afterChangeButtons} onClick={() => handleCancelClick()}> 취소 </button>
                </div>
                :
                    <button css={s.inputButton} onClick={handleRegisterClick}> 등록 </button>
                }
            </div>
            <div>
                {
                    comments.map(
                        comment => 
                        <li key={comment.teacherCommentId} css={s.commentItems}>
                            <div css={s.commentTitle}>
                                <div css={s.commentOption}>
                                {comment.nickname}
                                    <div css={s.headerRight}>
                                    <div css={s.commentDate}>{GetTime(new Date(comment.createDate))}</div>
                                    <div css={s.optionButtonBox}>
                                        <button css={s.beforeChangeButton} onClick={() => setShowDropDownById(id => id === comment.teacherCommentId ? 0 : comment.teacherCommentId)}><BsThreeDotsVertical /></button>
                                        {
                                            isShowDropDownById === comment.teacherCommentId &&
                                            <div css={s.commentItem}>
                                                {
                                                    comment.teacherId === teacherUserId &&
                                                    <>
                                                        <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.teacherCommentId,comment.comment)}> 수정 </button>
                                                        <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.teacherCommentId)}> 삭제 </button>
                                                    </>
                                                }
                                                {
                                                    comment.teacherId !== teacherUserId &&
                                                    <>
                                                        <button css={s.commentOptionButton} onClick={() => handleDeclareClick(comment.teacherCommentId)}> 신고 </button>
                                                    </>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                </div>
                               
                            </div>
                            <div css={s.commentMain}>
                                <pre>{comment.comment}</pre>
                            </div>
                        </li>
                    )
                }
            </div>
            
        </div>
    );
}

export default TeacherComment;