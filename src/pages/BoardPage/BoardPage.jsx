/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { deleteBoardRequest, getSingleBoardReqeust } from "../../apis/api/boardApi";
import { Link, useParams } from "react-router-dom";

function BoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleBoardReqeust(params.studentBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
                console.log(response.data);
            }
        }
    );

    const deleteBoardMutation = useMutation({
        mutationKey:"deleteBoardMutation",
        mutationFn: deleteBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            window.location.replace("/board/student/boardList?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        deleteBoardMutation.mutate(params.studentBoardId);
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>학생용</button>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <div css={s.boardPageTitle}>
            {singleBoard.title}
        </div>
        <div> {singleBoard.createDate} </div>
        <div css={s.boardListLayout}>
           
            <div> author </div>
            <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
            <div>{singleBoard.viewCount}</div>
            
        </div>
        <div>
            <Link to={`/board/student/update/${singleBoard.studentBoardId}`}>
                <button>수정</button>
            </Link>
            <button onClick={handleDeleteClick}>삭제</button>
        </div>

    </div>
    );
}

export default BoardPage;