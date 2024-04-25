/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { deleteBoardRequest, getSingleBoardReqeust } from "../../apis/api/boardApi";
import { Link, useParams } from "react-router-dom";
import StudentComment from "../../components/StudentComment/StudentComment";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";

function BoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));

    console.log(formattedTime);
    console.log(timeStamp);
    console.log(singleBoard);

    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleBoardReqeust(params.studentBoardId),
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
        mutationFn: deleteBoardRequest,
        onSuccess: response => {
                alert("삭제 완료")
                window.location.replace("/student/boards?page=1");
        }
    });
    
    const handleDeleteClick = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
        deleteBoardMutation.mutate(params.studentBoardId);
        }
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>학생용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <div css={s.showDate}> {formattedTime} </div>

        <div css={s.boardListLayout}>

            <div css={s.boardPageProfile}>
                <div css={s.boardPageMainHeader}>
                    <div css={s.boardPageProfileImg}>img</div>
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
                    <Link to={`/student/board/update/${singleBoard.studentBoardId}`}>
                    <button css={s.optionButton}>수정</button>
                    </Link>
                    <button onClick={handleDeleteClick} css={s.optionButton}>삭제</button>
                </div>
                
            </div>
            
            <div css={s.boardPageMain}>
                <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
            </div>
            
            
        </div>
            <StudentComment />
    </div>
    );
}

export default BoardPage;