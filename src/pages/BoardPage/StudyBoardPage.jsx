/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { deleteStudyBoardRequest, getSingleStudyBoardReqeust } from "../../apis/api/studyBoardApi";
import StudyComment from "../../components/StudentComment/StudyComment";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";

function StudyBoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));

    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleStudyBoardReqeust(params.studyBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
               setTimeStamp(() => response.data.createDate)
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
        if(window.confirm("정말 삭제하시겠습니까?")){
        deleteBoardMutation.mutate(params.studyBoardId);
        }
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        
        <div css={s.showDate}> {formattedTime} </div>
        <div css={s.boardListLayout}>

           <div css={s.boardPageProfile}>
                <div css={s.boardPageMainHeader}>
                        <div css={s.boardPageProfileImg}> img </div>
                        <div>
                            <div> {singleBoard.title}</div>
                            <div> author </div>
                        </div>
                </div>
                <div css={s.optionButtons}>
                <div css={s.boardPageViewCount}>
                <div css={s.viewIcon}>
                        <GrView />
                    </div>
                    {singleBoard.viewCount}</div>
                <Link to={`/study/board/update/${singleBoard.studyBoardId}`}>
                    <button css={s.optionButton}>수정</button>
                </Link>
                    <button css={s.optionButton} onClick={handleDeleteClick}>삭제</button>
                </div>
           </div>

           <div css={s.boardPageMain}>
                <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
           </div>
           
            
        </div>
        
        <div>
            
        </div>
            <StudyComment />
    </div>
    );
}

export default StudyBoardPage;