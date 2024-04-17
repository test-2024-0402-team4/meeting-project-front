/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import React, { useState } from 'react';
import { useMutation, useQuery } from "react-query";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTeacherCommentRequest, getTeacherCommentRequest, registerTeacherCommentRequest, updateTeacherCommentRequest } from "../../apis/api/teacherBoardApi";

function TeacherComment(props) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    const [isShow, setShow] = useState(false);
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
    const [isShowDropDownById, setShowDropDownById] = useState(0);
    
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
            teacherId : 27,
            comment : inputValue
        };
        console.log(comment);
        registerTeacherCommentMutation.mutate(comment);
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
        
        deleteTeacherCommentMutation.mutate(teacherCommentId);
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
    }

    const handleCancelClick = () => {

        setInputValue(() => "");
        setChangeButton(() => 0);
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
                                    author
                                    <div css={s.optionButtonBox}>
                                        <button onClick={() => setShowDropDownById(id => id === comment.teacherCommentId ? 0 : comment.teacherCommentId)}><BsThreeDotsVertical /></button>
                                        {
                                            isShowDropDownById === comment.teacherCommentId &&
                                            <div css={s.commentItem}>
                                                <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.teacherCommentId,comment.comment)}> 수정 </button>
                                                <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.teacherCommentId)}> 삭제 </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div>{comment.createDate}</div>
                            </div>

                            <div>{comment.comment}</div>
                        </li>
                    )
                }
            </div>
            
        </div>
    );
}

export default TeacherComment;