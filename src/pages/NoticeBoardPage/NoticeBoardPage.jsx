/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { deleteBoardRequest, getSingleBoardReqeust, getSingleNoticeBoardReqeust, updateNoticeBoardViewCountRequest } from "../../apis/api/boardApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";
import { useAuthCheck } from "../../hooks/useAuthCheck";

function NoticeBoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));
    

    const getNoticeBoardQuery = useQuery(
        ["getNoticeBoardQuery"],
        async() => await getSingleNoticeBoardReqeust(params.noticeId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
               setTimeStamp(() => response.data.createDate)
                console.log(response.data);
            }
        }
    );

    const updateNoticeViewCount = useQuery(
        ["updateNoticeViewCount"],
        async () => await updateNoticeBoardViewCountRequest(params?.noticeId),
        {
            refetchOnWindowFocus: false,
            onSuccess: () => {
                getNoticeBoardQuery.refetch();
            }
        }
    )

    

    return (
    <div css={s.layout}>
        
        <div css={s.boardPageTitle}>
            {singleBoard.title}
        </div>
        <div css={s.showDate}> {formattedTime} </div>
        <div css={s.boardPageViewCount}>
                    <div css={s.viewIcon}>
                        <GrView />
                    </div>
                        {singleBoard.viewCount}
                    </div>
        <div css={s.boardListLayout}>
        <div css={s.boardPageMain}>
            <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
        </div>
           
            
        </div>
    
            
    </div>
    );
}

export default NoticeBoardPage;