/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { deleteStudyBoardRequest, getSingleStudyBoardReqeust } from "../../apis/api/studyBoardApi";
import StudyComment from "../../components/StudentComment/StudyComment";

function StudyBoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleStudyBoardReqeust(params.studyBoardId),
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
        mutationFn: deleteStudyBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            window.location.replace("/study/boards?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        deleteBoardMutation.mutate(params.studyBoardId);
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <div css={s.boardPageTitle}>
            {singleBoard.title}
        </div>
        <div css={s.showDate}> {singleBoard.createDate} </div>
        <div css={s.boardListLayout}>
           <div css={s.boardPageProfile}>
                <div css={s.boardPageProfileImg}> img </div>
                <div> author </div>
           </div>

           <div css={s.boardPageMain}>
                <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
           </div>
            <div css={s.boardPageViewCount}>{singleBoard.viewCount}</div>
            
        </div>
        <div>
            <Link to={`/study/board/update/${singleBoard.studyBoardId}`}>
                <button>수정</button>
            </Link>
            <button onClick={handleDeleteClick}>삭제</button>
        </div>
        <div>
            
        </div>
            <StudyComment />
    </div>
    );
}

export default StudyBoardPage;