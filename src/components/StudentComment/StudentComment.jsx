/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteStudentCommentRequest, getStudentCommentRequest, getStudentGenderType, getStudentIdRequest, getUserNickname, registerStudentComment, registerStudentCommentRequest, updateStudentCommentRequest } from "../../apis/api/boardApi";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import GetTime from "../GetTime/GetTime";
import { MdSubdirectoryArrowRight } from "react-icons/md";


function StudentComment({userId, roleId}) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
    const [isShowDropDownById, setShowDropDownById] = useState(0);
    const buttonRef = useRef();
    const commentInputRef = useRef(null);
    const [ lsStudentId, setLsStudentId ] =useState(0);
    const studentUserId = lsStudentId;
    const queryClient = useQueryClient();
    const [timeStamp,setTimeStamp] = useState([]);
    const [studentId, setStudentId] = useState();
    const [nickName , setNickName] = useState();
    const [genderType, setGenderType] = useState([]);
    const navigate = useNavigate();


  
    const getStudentId = useQuery(
      ["getStudentId",userId],
      async() => await getStudentIdRequest(userId),
      {
          refetchOnWindowFocus : false,
          onSuccess: response => {
                console.log(response);
                setStudentId(response.data.studentId);
          },
          onError: error => {
            console.log(userId);
          },
          enabled: !!userId
      }
  );

  const getUserNicknameRequest = useQuery(
    ["getUserNicknameRequest",userId],
    async() => await getUserNickname(userId),
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
                setLsStudentId(decodedPayload.studentId);
            } catch (error) {
                console.error("Failed to decode AccessToken:", error);
                setLsStudentId(0); // 예외 발생 시 roleId를 기본값으로 설정
            }
        } else {
            console.error("AccessToken not found in localStorage");
            setLsStudentId(0); // AccessToken이 없을 경우 roleId를 기본값으로 설정
        }
    }, []);


    const handleButtonClick = (e, id) => {
        console.log(e.target)
        buttonRef.current = e.target;
        setShowDropDownById(prevId => prevId === id ? 0 : id)
        console.log("나 버튼 아이콘");
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
  


    const getCommentQuery = useQuery(
        ["getCommentQuery"],
        async() => await getStudentCommentRequest(params.studentBoardId),
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
                ))
                console.log(response.data);
            }
        }
    );


    const registerStudentCommentMutation = useMutation({
        mutationKey:"registerStudentCommentMutation",
        mutationFn: registerStudentCommentRequest,
        onSuccess: response => {
            alert("댓글이 작성되었습니다");
            window.location.reload();
        }
    });

    const handleRegisterClick = () => {
        const comment = {
            studentBoardId: params.studentBoardId,
            studentUserId : studentId,
            nickname : nickName,
            comment : inputValue
        };
        console.log(comment);
        if (!inputValue.trim()) { 
            alert("내용을 작성해 주세요!"); 
            return; 
        }
        if(window.confirm("댓글을 등록하시겠습니까?")){
        registerStudentCommentMutation.mutate(comment);
        }
    }

    const deleteStudentCommentMutation = useMutation({
        mutationKey:"deleteStudentCommentMutation",
        mutationFn: deleteStudentCommentRequest,
        onSuccess: response => {
            alert("삭제가 완료되었습니다")
            window.location.reload();
        }
    });

    const handleDeleteClick = (studentCommentId) => {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
        deleteStudentCommentMutation.mutate(studentCommentId);
        }
        setShowDropDownById(0);
    }

    const updateStudentCommentMutation = useMutation({
        mutationKey: "updateStudentCommentMutation",
        mutationFn: updateStudentCommentRequest,
        onSuccess: response => {
            alert("수정이 완료되었습니다")
            window.location.reload();
        }
    })

    const handleUpdateCompleteClick = (studentCommentId) => {
        const updateComment = {
            studentCommentId,
            comment: inputValue
        };
        console.log(updateComment);
        updateStudentCommentMutation.mutate(updateComment);
    }

    const handleUpdateClick = (studentCommentId, comment) => {
        console.log(studentCommentId);
        console.log(comment);
        setCurrentCommentId(studentCommentId);
        setInputValue(() => comment);
        setChangeButton(() => 1);
        setShowDropDownById(0);
        console.log("나 수정버튼")

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
    const handleDeclareClick = (studentCommentId) => {
        navigate(`/notice/declare/student/comment/${studentCommentId}`);
    }

    
    
  
   
    return (
        <div css={s.commentLayout}>
              
            <div css={s.inputContainer}>
                <textarea 
                css={s.inputComment}
                ref={commentInputRef}
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
            <div >
                {
                    comments.map(
                        comment => 
                        <li key={comment.studentCommentId} css={s.commentItems}>
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
                                        <button css={s.beforeChangeButton} onClick={(e) => handleButtonClick(e, comment.studentCommentId)}><BsThreeDotsVertical /></button>
                                        {
                                            isShowDropDownById === comment.studentCommentId &&
                                            <div css={s.commentItem}>
                                                    {
                                                        roleId === 3 ? 
                                                            <>
                                                                <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studentCommentId)}> 삭제 </button>
                                                            </>
                                                    :
                                                        comment.studentUserId === studentUserId ?
                                                            <>
                                                                <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.studentCommentId,comment.comment)}> 수정 </button>
                                                                <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studentCommentId)}> 삭제 </button>
                                                            </>
                                                    :
                                                        comment.studentUserId !== studentUserId ?
                                                            <>
                                                                
                                                                <button css={s.commentOptionButton} onClick={() => handleDeclareClick(comment.studentCommentId)}> 신고 </button>
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
                                    <div><MdSubdirectoryArrowRight /></div>
                                    <pre>{comment.comment}</pre>
                                </div>
                        </li>
                    )
                }
            </div>
            
        </div>
    );
}

export default StudentComment;