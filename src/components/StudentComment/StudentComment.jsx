/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import React, { useState } from 'react';
import { useMutation, useQuery } from "react-query";
import { deleteStudentCommentRequest, getStudentCommentRequest, registerStudentComment, registerStudentCommentRequest, updateStudentCommentRequest } from "../../apis/api/boardApi";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteModal from "../DeleteModal/DeleteModal";

function StudentComment(props) {
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [inputValue, handleInputChange,setInputValue] = useMaxValueValidateInput(150);
    const [isShow, setShow] = useState(false);
    const [currentCommentId , setCurrentCommentId] = useState();
    const [changeButton, setChangeButton] = useState(0);
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
            studentUserId : 27,
            comment : inputValue
        };
        console.log(comment);
        registerStudentCommentMutation.mutate(comment);
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
        
        deleteStudentCommentMutation.mutate(studentCommentId);
    }

    const updateStudentCommentMutation = useMutation({
        mutationKey: "updateStudentCommentMutation",
        mutationFn: updateStudentCommentRequest,
        onSuccess: response => {
            alert("수정이 완료되었습니다")
            window.location.reload();
        }
    })

    const handleUpdateCompleteClick = () => {
        const updateComment = {
            studentCommentId: currentCommentId,
            comment: inputValue
        };
        console.log(updateComment);
        updateStudentCommentMutation.mutate(updateComment);
    }

    const handleUpdateClick = (studentCommentId,comment) => {
        console.log(studentCommentId);
        console.log(comment);
        setCurrentCommentId(studentCommentId);
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
                    <button  css={s.afterChangeButtons} onClick={() => handleUpdateCompleteClick()}> 완료 </button>
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
                        <li key={comment.studentCommentId} css={s.commentItems}>
                            <div css={s.commentTitle}>
                                <div css={s.commentOption}>
                                    author
                                    <button css={s.commentOptionButton} onClick={() => handleUpdateClick(comment.studentCommentId,comment.comment)}> 수정 </button>
                                    <button css={s.commentOptionButton} onClick={() => handleDeleteClick(comment.studentCommentId)}> 삭제 </button>
                                        
                                </div>
                                <div>{comment.createDate}</div>
                            </div>

                            <div css={s.commentItem}>{comment.comment}</div>
                        </li>
                    )
                }
            </div>
            
        </div>
    );
}

export default StudentComment;