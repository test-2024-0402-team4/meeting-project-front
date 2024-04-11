/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";

import React, { useState } from 'react';
import { useQuery } from "react-query";
import { getStudentCommentRequest } from "../../apis/api/boardApi";

function StudentComment(props) {
    const params = useParams();
    const [comments, setComments] = useState([]);

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
    return (
        <div css={s.commentLayout}>
            <div css={s.inputContainer}>
                <textarea css={s.inputComment} placeholder="댓글을 입력해 주세요"></textarea>
                <button css={s.inputButton}> 등록 </button>
            </div>
            <div>
                {
                    comments.map(
                        comment => 
                        <li key={comment.studentCommentId} css={s.commentItems}>
                            <div css={s.commentTitle}>
                                <div>author</div>
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