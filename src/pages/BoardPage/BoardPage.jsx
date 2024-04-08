/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { deleteBoardRequest, getSingleBoardReqeust } from "../../apis/api/boardApi";

function BoardPage(props) {
    const [singleBoard , setSingleBoard] = useState("");
    const [isDelete , setDelete] = useState(false);
    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleBoardReqeust({
          
        }),
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
            window.location.replace("/board/student/boardList");

        }
    });
    const handleDeleteClick = () => {
        deleteBoardMutation.mutate();
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
            <button>수정</button>
            <button onClick={handleDeleteClick}>삭제</button>
        </div>

    </div>
    );
}

export default BoardPage;