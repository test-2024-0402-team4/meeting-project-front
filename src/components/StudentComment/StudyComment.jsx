/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteStudyCommentRequest, getStudyCommentRequest, getUserNicknameByStuduBoard, registerStudyCommentRequest, updateStudyCommentRequest } from "../../apis/api/studyBoardApi";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import GetTime from "../GetTime/GetTime";
import { getTeacherNickname } from "../../apis/api/teacherBoardApi";
import { getUserNickname } from "../../apis/api/boardApi";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function StudyComment({roleId}) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    const [userId1, setUserId] = useState();
    const [isShow, setShow] = useState(false);
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
    const [isShowDropDownById, setShowDropDownById] = useState(0);
    const commentRef = useRef();
    const [profile,setProfile] = useState({});
    const [ lsUserId, setLsUsertId ] =useState(0);
    const userId = lsUserId;
    const commentInputRef = useRef(null);
    const [timeStamp,setTimeStamp] = useState([]);
    const [nickName , setNickName] = useState();
    const [role , setRole] = useState();
    const buttonRef = useRef();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const principalData = queryClient.getQueryData("principalQuery");

    useEffect(() => {
        setUserId(principalData?.data.userId)

    },[]);


useEffect(() => {
    if (userId1 && role) {
      if (role === 1) {
        getUserNicknameRequest.refetch();
      } else if (role === 2) {
        getTeacherNicknameRequest.refetch();
      }
    }
  }, [userId1, role]);

  const getUserNicknameRequest = useQuery(
    ["getUserNicknameRequest", userId1],
    async() => await getUserNicknameByStuduBoard(userId1),
    {
        refetchOnWindowFocus : false,
        enabled: !!userId1,
        onSuccess: response => {
            setNickName(response.data.nickname);
        },
        onError: error => {
        },
    }
  );

  const getTeacherNicknameRequest = useQuery(
    ["getTeacherNicknameRequest",userId1],
    async() => await getUserNicknameByStuduBoard(userId1),
    {
        refetchOnWindowFocus : false,
        onSuccess: response => {
              setNickName(response.data.nickname);
        },
        onError: error => {
        },
        enabled: !!userId1
    }
  );

useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
        const tokenPayLoad = token.split('.')[1];
        try {
            const decodedPayload = JSON.parse(atob(tokenPayLoad));
            setLsUsertId(decodedPayload.userId);
        } catch (error) {
            console.log("Failed to decode AccessToken:", error);
            setLsUsertId(0); // 예외 발생 시 roleId를 기본값으로 설정
        }
    } else {
        console.log("AccessToken not found in localStorage");
        setLsUsertId(0); // AccessToken이 없을 경우 roleId를 기본값으로 설정
    }
}, []);

const handleButtonClick = (e, id) => {
    buttonRef.current = e.target;
    setShowDropDownById(prevId => prevId === id ? 0 : id)

}

useEffect(() => {
    function handleClickOutside(event) {
        if (event.target !== buttonRef.current) {
            setShowDropDownById(0);
        }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, [buttonRef.current]);


    const getStudyCommentQuery = useQuery(
        ["getStudyCommentQuery"],
        async() => await getStudyCommentRequest(params.studyBoardId),
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
            }
        }
    );

    const registerStudyCommentMutation = useMutation({
        mutationKey:"registerStudyCommentMutation",
        mutationFn: registerStudyCommentRequest,
        onSuccess: response => {
            alert("댓글이 작성되었습니다");
            window.location.reload();
        }
    });

    const handleRegisterClick = () => {
        const comment = {
            studyBoardId: params.studyBoardId,
            userId : userId1,
            nickname: nickName,
            comment : inputValue
        };
        if (!inputValue.trim()) { 
            alert("내용을 작성해 주세요!"); 
            return; 
        }
        if(window.confirm("댓글을 등록하시겠습니까?")){
        registerStudyCommentMutation.mutate(comment);
        }
    }

    const deleteStudyCommentMutation = useMutation({
        mutationKey:"deleteStudyCommentMutation",
        mutationFn: deleteStudyCommentRequest,
        onSuccess: response => {
            alert("삭제가 완료되었습니다")
            window.location.reload();
        }
    });

    const handleDeleteClick = (studyCommentId) => {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
        deleteStudyCommentMutation.mutate(studyCommentId);
        }
    }

    const updateStudyCommentMutation = useMutation({
        mutationKey: "updateStudyCommentMutation",
        mutationFn: updateStudyCommentRequest,
        onSuccess: response => {
            alert("수정이 완료되었습니다")
            window.location.reload();
        }
    })

    const handleUpdateCompleteClick = (studyCommentId) => {
        const updateComment = {
            studyCommentId,
            comment: inputValue
        };
        updateStudyCommentMutation.mutate(updateComment);
    }

    const handleUpdateClick = (studyCommentId, comment) => {
        setCurrentCommentId(studyCommentId);
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

    const handleDeclareClick = (studyCommentId) => {
        navigate(`/notice/declare/study/comment/${studyCommentId}`);
    }
  
   
    return (
        <div css={s.commentLayout} ref={commentRef}>
              
            <div css={s.inputContainer} >
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
                        <li key={comment.studyCommentId} css={s.commentItems}>
                            <div css={s.commentTitle}>
                                <div css={s.commentOption}>
                                <div css={s.commentDiv}>
                                    {comment.userImgUrl !== null ? 
                                        (
                                            <div css={s.imgBox}>
                                                <img src={comment.userImgUrl} alt="" />
                                            </div>
                                        ) : 
                                        (
                                            <div css={s.imgBox}>
                                                <img src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="" />
                                            </div>
                                        )} 
                                        <div css={s.commentNick}>
                                            {comment.nickname}
                                        </div>                                                                               
                                    </div>

                                    <div css={s.headerRight}>
                                    <div css={s.commentDate}>{GetTime(new Date(comment.createDate))}</div>
                                    <div css={s.optionButtonBox}>
                                        <button css={s.beforeChangeButton} onClick={(e) => handleButtonClick(e, comment.studyCommentId)}><BsThreeDotsVertical /></button>
                                        {
                                            isShowDropDownById === comment.studyCommentId &&
                                            <div css={s.commentItem}>
                                                {
                                                    roleId === 3 ? 
                                                    <>
                                                        <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studyCommentId)}>삭제</button>
                                                    </>
                                                :
                                                    comment.userId === userId ?
                                                    <>
                                                        <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.studyCommentId,comment.comment)}> 수정 </button>
                                                        <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studyCommentId)}>삭제</button>
                                                    </>
                                                :
                                                    comment.userId !== userId ?
                                                        <>
                                                            
                                                            <button css={s.commentOptionButton} onClick={() => handleDeclareClick(comment.studyCommentId)}> 신고 </button>
                                                        </>
                                                :
                                                    <>
                                                    </>
                                                }
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div css={s.commentMain}>
                                <pre><MdSubdirectoryArrowRight /> {comment.comment}</pre>
                            </div>
                        </li>
                    )
                }
            </div>
            
        </div>
    );
}

export default StudyComment;