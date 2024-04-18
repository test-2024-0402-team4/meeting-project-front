/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from "react-query";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTeacherCommentRequest, getTeacherCommentRequest, registerTeacherCommentRequest, updateTeacherCommentRequest } from "../../apis/api/teacherBoardApi";
import { deleteStudyCommentRequest, getStudyCommentRequest, registerStudyCommentRequest, updateStudyCommentRequest } from "../../apis/api/studyBoardApi";

function StudyComment(props) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    const [isShow, setShow] = useState(false);
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
    const [isShowDropDownById, setShowDropDownById] = useState(0);
    const commentRef = useRef();
    const userId = 1;
    useEffect(() => {
        function handleClickOutside(event) {
            if (commentRef.current && !commentRef.current.contains(event.target)) {
                setShowDropDownById(0);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                console.log(response.data);
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
            userId : 12,
            comment : inputValue
        };
        console.log(comment);
        registerStudyCommentMutation.mutate(comment);
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
        
        deleteStudyCommentMutation.mutate(studyCommentId);
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
        console.log(updateComment);
        updateStudyCommentMutation.mutate(updateComment);
    }

    const handleUpdateClick = (studyCommentId, comment) => {
        console.log(studyCommentId);
        console.log(comment);
        setCurrentCommentId(studyCommentId);
        setInputValue(() => comment);
        setChangeButton(() => 1);
    }

    const handleCancelClick = () => {

        setInputValue(() => "");
        setChangeButton(() => 0);
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
                                    author
                                    <div css={s.optionButtonBox}>
                                        <button onClick={() => setShowDropDownById(id => id === comment.studyCommentId ? 0 : comment.studyCommentId)}><BsThreeDotsVertical /></button>
                                        {
                                            isShowDropDownById === comment.studyCommentId &&
                                            <div css={s.commentItem}>
                                                {
                                                    comment.userId === userId &&
                                                    <>
                                                        <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.studyCommentId,comment.comment)}> 수정 </button>
                                                        <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studyCommentId)}> 삭제 </button>
                                                    </>
                                                }
                                                {
                                                    comment.userId !== userId &&
                                                        <>
                                                            <button css={s.commentOptionButton}> 차단 </button>
                                                            <button css={s.commentOptionButton}> 신고 </button>
                                                        </>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div>{comment.createDate}</div>
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

export default StudyComment;